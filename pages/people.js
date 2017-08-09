import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class People extends Component {

    constructor(props) {
        super(props);
        const page = 1;
        const take = 10;
        const start = (page - 1) * take;
        const end = (page * take) - 1;
        this.state = {
            start,
            end,
            take: take
        };
        this.loadUser = this.loadUser.bind(this);
    }

    loadUser() {
        let user = localStorage.getItem('user');
        if(user) user = JSON.parse(user);
        this.setState({ user });
    }

    componentDidMount() {
        this.loadUser();
    }


    static async getInitialProps() {
        return axios.get(`${values.baseUrl}api/people.json`).then((resp) => {
            const itens = resp.data.map((person) => {
                person.status = person['infected?'] ? 'Infectado' : 'não Infectado';
                person.genderLabel = person.gender === 'M' ? 'Masculino' : 'Feminino';
                return person;
            });
            const headers = [
                'Nome',
                'Idade',
                'Gênero',
                'Infectado'
            ];

            return {
                headers,
                itens: itens,
            }
        }, () => {
            return;
        })
    }

    onRowClick(row) {
        window.location.href = `/person/${row.location.split('/').pop()}`;
    }

    setPagination(page) {
        const start = (page - 1) * this.state.take;
        const end = (page * this.state.take) - 1;
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
                            <Link href={`/person/${this.state.user.id}`}>
                                    <button className="btn btn-link pull-right">
                                        Ver meu perfil
                                    </button>
                            </Link>
                        }

                        <span className="pull-right"></span>

                    </h4>
                </div>

                <Link href={`/person`}>
                    <button className="btn btn-primary margin-bottom">Novo sobrevivente</button>
                </Link>

                <div className="my-table">
                    <BootstrapTable 
                        trClassName={'clickable'} data={this.props.itens} search striped 
                        searchPlaceholder='Pesquisar...' hover
                        pagination options={{ onRowClick: this.onRowClick }}>
                        <TableHeaderColumn isKey={true} dataField='name'> 
                            Nome
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='genderLabel'>Gênero</TableHeaderColumn>
                        <TableHeaderColumn dataField='age'>Idade</TableHeaderColumn>
                        <TableHeaderColumn dataField='status'>Infectado</TableHeaderColumn>
                    </BootstrapTable>
                </div>

            </Page>
        );
    }
}