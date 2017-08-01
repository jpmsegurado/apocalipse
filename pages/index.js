import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import axios from 'axios';
import Link from 'next/link';


export default class Index extends Component {

    constructor(props) {
        super(props);
    }



    static async getInitialProps() {
        return axios.get(`${values.baseUrl}api/people.json`).then((resp) => {
            const itens = resp.data.splice(0, 10);
            return {
                itens: itens
            }
        }, () => {
            return;
        })
    }

    render() {
        return (
            <Page>
                <div className="page-header">
                    <h4>Sobreviventes</h4>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Gênero</th>
                            <th>Infectado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.itens.map((item) => 
                            <tr>
                                <td>
                                    <Link 
                                        key={item.location.split('/').pop()}
                                        href={`/person?id=${item.location.split('/').pop()}`}
                                        as={`/person/${item.location.split('/').pop()}`} >

                                        <a>{item.name}</a>

                                    </Link>
                                </td>
                                <td>{item.age}</td>
                                <td>{item.gender === 'M' ? 'Masculino' : 'Feminino'}</td>
                                <td>{item.infected ? 'Sim' : 'Não'}</td>
                            </tr>    
                        )}
                    </tbody>

                </table>

            </Page>
        );
    }
}