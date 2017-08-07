import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import axios from 'axios';
import Link from 'next/link';


export default class People extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.loadUser = this.loadUser.bind(this);
        console.log(props.itens);
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
            const itens = resp.data;
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

                <style jsx>
                    {`
                        .margin-bottom {
                            margin-bottom: 10px;
                        }
                    `}
                </style>

                <div className="page-header" onLoad={this.loadUser}>
                    <h4>
                        Sobreviventes
                        {   
                            this.state.user && 
                            <button className="btn btn-link pull-right">
                                Bem vindo(a), {this.state.user.name}.
                            </button>
                        }

                        <span className="pull-right"></span>

                    </h4>
                </div>

                <Link href={`/person`}>
                    <button className="btn btn-primary margin-bottom">Novo sobrevivente</button>
                </Link>

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
                            <tr key={item.location.split('/').pop()}>
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
                                <td>{item['infected?'] ? 'Sim' : 'Não'}</td>
                            </tr>    
                        )}
                    </tbody>

                </table>

            </Page>
        );
    }
}