import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Page from '../components/page';
import Loading from '../components/loading';
import values from '../providers/values';


export default class Index extends Component {

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
    this.changeSearch = this.changeSearch.bind(this);
    this.getFilteredItens = this.getFilteredItens.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.goToUpdate = this.goToUpdate.bind(this);
  }

  onRowClick(row) {
    const id = row.location.split('/').pop();
    Router.push(`/person?id=${id}`, `/person/${id}`);
    this.setState({ loadingRoute: true });
  }

  getFilteredItens(itens) {
    let search = this.state.search;
    if (!search) return itens;
    search = this.removeSpecialChars(search).toLowerCase();
    return itens.filter((item) => {
      const removedSpecial = this.removeSpecialChars(item.name).toLowerCase();
      return removedSpecial.indexOf(search) > -1 || item.age === parseInt(search, 0);
    });
  }

  goToUpdate() {
    Router.push('/update');
    this.setState({ loadingRoute: true });
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
            <button onClick={this.goToUpdate} className="btn btn-link pull-right">
                Ver meu perfil
              </button>
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
            pagination options={{ onRowClick: this.onRowClick }}
          >
            <TableHeaderColumn isKey dataField="name">
              Nome
            </TableHeaderColumn>
            <TableHeaderColumn dataField="genderLabel">Gênero</TableHeaderColumn>
            <TableHeaderColumn dataField="age">Idade</TableHeaderColumn>
            <TableHeaderColumn dataField="status">Infectado</TableHeaderColumn>
          </BootstrapTable>
        </div>

        {this.state.loadingRoute && <Loading />}

      </Page>
    );
  }
}

Index.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.object),
};
