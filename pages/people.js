import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Page from '../components/page';
import values from '../providers/values';


export default class People extends Component {

  static async getInitialProps() {
    return axios.get(`${values.baseUrl}api/people.json`).then((resp) => {
      const itens = resp.data.map((person) => {
        const newPerson = Object.assign({}, person);
        newPerson.status = newPerson['infected?'] ? 'Infectado' : 'Não Infectado';
        newPerson.genderLabel = newPerson.gender === 'M' ? 'Masculino' : 'Feminino';
        return newPerson;
      });
      const headers = [
        'Nome',
        'Idade',
        'Gênero',
        'Infectado',
      ];

      return {
        headers,
        itens,
      };
    });
  }

  constructor(props) {
    super(props);
    const page = 1;
    const take = 10;
    const start = (page - 1) * take;
    const end = (page * take) - 1;
    this.state = {
      start,
      end,
      take,
      search: '',
    };
    // this.loadUser = this.loadUser.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.getFilteredItens = this.getFilteredItens.bind(this);
  }

  // componentDidMount() {
  //   this.loadUser();
  // }

  getFilteredItens(itens) {
    let search = this.state.search;
    if (!search) return itens;
    search = this.removeSpecialChars(search).toLowerCase();
    return itens.filter((item) => {
      const removedSpecial = this.removeSpecialChars(item.name).toLowerCase();
      return removedSpecial.indexOf(search) > -1 || item.age === parseInt(search, 0);
    });
  }

  removeSpecialChars = (s) => {
    const special = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    const normal = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    let newString = '';

    Object.keys(s).forEach((key) => {
      const index = special.indexOf(s[key]);
      if (index > 0) {
        newString += normal.substring(index, 1);
      } else {
        newString += s[key];
      }
    });

    return newString;
  }

  changeSearch(event) {
    const search = event.target.value;
    this.setState({ search });
  }

  // loadUser() {
  //   let user = window.localStorage.getItem('user');
  //   if (user) user = JSON.parse(user);
  //   this.setState({ user });
  // }

  render() {
    return (
      <Page>

        <style jsx>
          {`
            .margin-bottom {
                margin-bottom: 10px;
            }

            .clickable {
                cursor: pointer;
            }
            

            .my-table {
                cursor: pointer;
            }

            .pull-right i {
              margin-left: 10px;
            }

            .page-header {
              margin-top: 9px;
            }

        `}
        </style>

        <div className="page-header">
          <h4>
            Sobreviventes
            {
              this.state.user &&
              <Link href={`/person?id=${this.state.user.id}`} as={`/person/${this.state.user.id}`}>
                <button className="btn btn-link pull-right">
                  Ver meu perfil
                </button>
              </Link>
            }
            <span className="pull-right" />

          </h4>
        </div>

        <div className="row">

          <div className="col-xs-6">
            <input onChange={this.changeSearch} className="form-control" type="text" placeholder="Pesquisar por..." />
          </div>

          <div className="col-xs-6">
            <Link href={'/person'}>
              <button className="btn btn-primary margin-bottom pull-right">
                Novo sobrevivente
                <i className="fa fa-plus" />
              </button>
            </Link>
          </div>
        </div>

        <div className="my-table">
          <BootstrapTable
            striped
            noDataText="Nenhum sobrevivente foi encontrado" withoutNoDataText
            trClassName={'clickable'} data={this.getFilteredItens(this.props.itens)}
            hover
            pagination options={{ onRowClick: (row) => { window.location.href = `/person/${row.location.split('/').pop()}`; } }}
          >
            <TableHeaderColumn isKey dataField="name">
              Nome
            </TableHeaderColumn>
            <TableHeaderColumn dataField="genderLabel">Gênero</TableHeaderColumn>
            <TableHeaderColumn dataField="age">Idade</TableHeaderColumn>
            <TableHeaderColumn dataField="status">Infectado</TableHeaderColumn>
          </BootstrapTable>
        </div>

      </Page>
    );
  }
}

People.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.object),
};
