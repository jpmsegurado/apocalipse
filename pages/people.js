import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Page from '../components/page';
import values from '../values';


export default class People extends Component {

  static async getInitialProps() {
    return axios.get(`${values.baseUrl}api/people.json`).then((resp) => {
      const itens = resp.data.map((person) => {
        const newPerson = Object.assign({}, person);
        newPerson.status = newPerson['infected?'] ? 'Infectado' : 'não Infectado';
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
    };
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    let user = window.localStorage.getItem('user');
    if (user) user = JSON.parse(user);
    this.setState({ user });
  }

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

        `}
        </style>

        <div className="page-header" onLoad={this.loadUser}>
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

        <Link href={'/person'}>
          <button className="btn btn-primary margin-bottom">Novo sobrevivente</button>
        </Link>

        <div className="my-table">
          <BootstrapTable
            trClassName={'clickable'} data={this.props.itens} search striped
            searchPlaceholder="Pesquisar..." hover
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
