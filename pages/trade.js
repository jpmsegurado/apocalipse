import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import values from '../values';
import Page from '../components/page';

const aliases = values.aliases;

export default class Trade extends Component {

  static async getInitialProps(args) {
    if (!args.query.id) return { person: {} };

    return axios.get(`${values.baseUrl}api/people/${args.query.id}.json`).then(resp => axios.get(`${values.baseUrl}api/people/${args.query.id}/properties.json`).then((res) => {
      const person = resp.data;
      person.items = res.data;
      return {
        person,
      };
    }));
  }

  constructor(props) {
    super(props);
    this.state = {
      person: props.person,
      itemsUser: {
        water: 0,
        ammunition: 0,
        food: 0,
        medication: 0,
      },
      itemsPerson: {
        water: 0,
        ammunition: 0,
        food: 0,
        medication: 0,
      },
    };
    this.changePersonItem = this.changePersonItem.bind(this);
    this.changeUserItem = this.changeUserItem.bind(this);
    this.tradeItems = this.tradeItems.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  getUserPoints() {
    return (this.state.itemsUser.water * 4) +
    (this.state.itemsUser.food * 3) +
    (this.state.itemsUser.medication * 2) +
    this.state.itemsUser.ammunition;
  }

  getPersonPoints() {
    return (this.state.itemsPerson.water * 4) +
    (this.state.itemsPerson.food * 3) +
    (this.state.itemsPerson.medication * 2) +
    this.state.itemsPerson.ammunition;
  }

  changeUserItem(event) {
    const name = event.target.name;
    const value = event.target.value ? parseInt(event.target.value, 0) : 0;
    const itemsUser = Object.assign({}, this.state.itemsUser, { [name]: value });
    this.setState({ itemsUser });
  }

  changePersonItem(event) {
    const name = event.target.name;
    const value = event.target.value ? parseInt(event.target.value, 0) : 0;
    const itemsPerson = Object.assign({}, this.state.itemsPerson, { [name]: value });
    this.setState({ itemsPerson });
  }

  canEnable() {
    const userPoints = this.getUserPoints();
    const personPoints = this.getPersonPoints();
    return !(userPoints > 0 && personPoints > 0 && userPoints === personPoints);
  }

  loadUser() {
    let user = window.localStorage.getItem('user');
    if (user) user = JSON.parse(user);
    axios.get(`${values.baseUrl}api/people/${user.id}/properties.json`).then((res) => {
      user.items = res.data;
      this.setState({ user });
    });
  }

  tradeItems() {
    let personStr = '';
    let userStr = '';

    Object.keys(this.state.itemsPerson).forEach((prop) => {
      personStr = `${personStr}${prop}:${this.state.itemsPerson[prop]};`;
    });

    Object.keys(this.state.itemsUser).forEach((prop) => {
      userStr = `${userStr}${prop}:${this.state.itemsUser[prop]};`;
    });

    const params = {
      'consumer[name]': this.state.person.name,
      'consumer[pick]': personStr,
      'consumer[payment]': userStr,
    };

    this.setState({ loading: true, error: false, success: false });

    return axios.post(`${values.baseUrl}api/people/${this.state.user.id}/properties/trade_item.json`, params).then(() => {
      this.setState({ success: true });
      setTimeout(() => {
        window.location.href = `/person/${this.state.person.id}`;
      }, 1000);
    }, () => {
      this.setState({ error: true, loading: false });
    });
  }

  render() {
    return (
      <Page>
        <div className="col-xs-10 col-xs-offset-1">
          <style jsx>
            {`
              .btn-link {
                  margin: 0;
                  padding: 0;
              }

              .table .form-control {
                  max-width: 70px;
              }

              td * {
                  float: left;
              }

              td input {
                  margin-right: 10px;
              }

              td span {
                  line-height: 35px;
              }

              .form-control.error {
                  box-shadow: inset 0 1px 1px rgba(191, 25, 2, 0.6);
                  border-color: rgb(191, 25, 2);
              }
              .btn-primary {
                  margin-bottom: 10px;
              }

              .text-center {
                  color: #666;
              }

              .pontuacao {
                  margin-bottom: 25px;
              }

              .col-xs-6 h4 {
                  margin-bottom: 25px;
              }

            `}
          </style>

          <div className="page-header">
            <h4>
              Troca com {this.state.person.name}
              <Link href={`/person?id=${this.state.person.id}`} as={`/person/${this.state.person.id}`}>
                <a className="btn btn-link pull-right">Voltar</a>
              </Link>
            </h4>
          </div>

          <div className="col-xs-6">
            <h4>Seu inventório</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Quantidade para troca</th>
                </tr>
              </thead>
              <tbody>
                {!!this.state.user && this.state.user.items.map(item => (
                  <tr key={item.item.name}>
                    <td>
                      <span>
                        {aliases[item.item.name.toLowerCase()]}
                      </span>
                    </td>
                    <td>
                      <input
                        type="number"
                        className={`form-control ${
                            this.state.itemsUser[item.item.name.toLowerCase()] > parseInt(item.quantity, 0) ? 'error' : ''
                        }`}
                        name={item.item.name.toLowerCase()}
                        value={this.state.itemsUser[item.item.name.toLowerCase()]}
                        onChange={this.changeUserItem}
                      />

                      <span>de {item.quantity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="pontuacao">
              Pontuação: {this.getUserPoints()}
            </p>
          </div>

          <div className="col-xs-6">
            <h4>Inventório de {this.state.person.name}</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Quantidade para troca</th>
                </tr>
              </thead>
              <tbody>
                {this.state.person.items.map(item => (
                  <tr key={item.item.name}>
                    <td>
                      <span>
                        {aliases[item.item.name.toLowerCase()]}
                      </span>
                    </td>
                    <td>
                      <input
                        type="number"
                        className={`form-control ${
                            this.state.itemsPerson[item.item.name.toLowerCase()] > parseInt(item.quantity, 0) ? 'error' : ''
                        }`}
                        name={item.item.name.toLowerCase()}
                        value={
                          this.state.itemsPerson[item.item.name.toLowerCase()]
                        }
                        onChange={this.changePersonItem}
                      />
                      <span>de {item.quantity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="pontuacao">
              Pontuação: {this.getPersonPoints()}
            </p>
          </div>

          <div className="col-xs-12">
            <button type="button" onClick={this.tradeItems} className="btn btn-primary btn-block primary" disabled={this.canEnable() || this.state.loading}>
              Confirmar troca
              {this.state.loading &&
              <i className="fa fa-spin fa-spinner" />}
            </button>
          </div>

          {this.state.success &&
          <div className="col-xs-12">
            <div className="alert alert-success">
                Troca realizada com sucesso.
            </div>
          </div>}

          {this.state.error &&
          <div className="col-xs-12">
            <div className="alert alert-danger">
              Não foi possível realizar esta troca no momento.
            </div>
          </div>}

          <div className="col-xs-12">
            <p className="text-center">
              Lembre-se: a pontuação entre os itens de troca
              deve ser a mesma, para que ninguém saia perdendo.
            </p>
          </div>
        </div>

      </Page>
    );
  }
}

Trade.propTypes = {
  person: PropTypes.instanceOf(PropTypes.object),
};
