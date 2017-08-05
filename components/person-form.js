import values from '../values';
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

const aliases = values.aliases;

export default class PersonForm extends Component {

    constructor(props) {
        super(props);

        let person = props.person;
        if(!person.items) {
            person.items = [
                    { name: 'water', quantity: 0 },
                    { name: 'ammunition', quantity: 0 },
                    { name: 'food', quantity: 0 },
                    { name: 'medication', quantity: 0 }
                ]
        }

        this.state = {
            person: person
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.reportInfection = this.reportInfection.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        if(name === 'infected') value = (value == 'true');
        if(name === 'age') value = parseInt(value);

        const person = Object.assign({}, this.state.person, { [name]: value });

        this.setState({
            person
        }); 

    }

    handleItemChange(event) {
        const name = event.target.name;
        const value = parseInt(event.target.value);
        
        let person = this.state.person;

        let index = person.items.findIndex((i) => {
            return i.name === name;
        });

        person.items[index].quantity = value;
        
        this.setState({person});

    }

    reportInfection(event) {

        const user = JSON.parse(localStorage.getItem('user'));
        const params = {
            infected: this.state.person.id
        }
        this.setState({ reporting: true });
        return axios.post(`${values.baseUrl}api/people/${user.id}/report_infection.json`, params).then(() => {
            this.setState({ reporting: false, reported: true });
        }, () => {
            this.setState({ reporting: false });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true, error: false, success: false });
        if(this.state.person.id) {
            return axios.patch(`${values.baseUrl}api/people/${this.props.person.id}.json`, this.state.person).then(() => {
                this.setState({ loading: false, success: true });
                window.location.href = '/people';
            }, (err) => {
                this.setState({ loading: false, error: true });
            });
        } else {
            let person = Object.assign({}, this.state.person);
            person.items = person.items.map((elem) => {
                return `${elem.name}:${elem.quantity}`;
            }).join(';');

            return axios.post(`${values.baseUrl}api/people.json`, person).then(() => {
                this.setState({ loading: false, success: true });
            }, (err) => {
                this.setState({ loading: false, error: true });
            });
        }

    }


    render() {

        const Span = styled.span`
            height: 20px;
            display: flex;
            align-items: center;
            width: 100%;
        `;

        return (

            <form onSubmit={this.handleSubmit}>

                <style jsx>{`
                    input[type="radio"] {
                        margin: 0 5px 0 0;
                    }

                    .fa {
                        margin-left: 5px;
                    }

                    .margin-top {
                        margin-top: 20px;
                    }

                    .alert {
                        margin-top: 10px;
                    }

                    .table td input {
                        max-width: 100px;
                    }

                    .infected { 
                        margin: 20px -15px;
                    }

                    .btn-link {
                        margin: 0;
                        padding: 0;
                    }

                `}</style>

                <div className="row">
                        <div className="col-xs-4">
                        <div className="form-group">
                            <label>Nome</label>
                            <input 
                                type="text" className="form-control" 
                                onChange={this.handleInputChange} 
                                name="name"
                                required
                                value={this.state.person.name}/>
                        </div>
                    </div>

                    <div className="col-xs-4">
                        <div className="form-group">
                            <label>Idade</label>
                            <input
                                required
                                type="number" className="form-control" 
                                onChange={this.handleInputChange} 
                                name="age"
                                value={this.state.person.age}/>
                        </div>
                    </div>

                    <div className="col-xs-4">
                        <div className="form-group">
                            <label>Gênero</label><br />
                            <Span>
                                    <input
                                        required
                                        type="radio" 
                                        onChange={this.handleInputChange} 
                                        name="gender"
                                        value="M"
                                        checked={this.state.person.gender === 'M'}/>

                                    Masculino
                            </Span>

                            <Span>
                                    <input 
                                        required
                                        type="radio" 
                                        onChange={this.handleInputChange} 
                                        name="gender"
                                        value="F"
                                        checked={this.state.person.gender === 'F'}/>

                                    Feminino
                            </Span>
                        </div>
                    </div>
                </div>

                <div className="row infected">
                    <div className="col-xs-12">
                        <button className="btn btn-primary btn-block" type="button" onClick={this.reportInfection}>

                            {this.state.reported ? 'Você marcou como infectado(a)' : 'Marcar como infectado(a)'}

                            {this.state.reporting && (
                                <i className="fa fa-spinner fa-spin"></i>
                            )}
                        </button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        {this.state.person.id && this.state.person.items.length === 0 &&
                            <div className="alert alert-warning" role="alert">
                                Este sobrevivente não possuí itens no inventório
                            </div>
                        }
                        {((this.state.person.id && this.state.person.items.length > 0) || !this.state.person.id) &&
                            <div>

                                <div className="page-header">
                                        <h4>
                                            Inventário

                                            {this.state.person.id &&  
                                        
                                            <Link href={`/trade/${this.state.person.id}`}>
                                                <a type="button" className="btn btn-link pull-right">
                                                    Fazer troca de itens
                                                </a>
                                            </Link>}

                                    </h4>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.person.items.map((item) => (
                                                <tr key={item.name}>
                                                    <td>
                                                        {!this.state.person.id ? aliases[item.name] : aliases[item.item.name.toLowerCase()] }
                                                    </td>
                                                    <td>
                                                        {this.state.person.id ?
                                                            (item.quantity) :
                                                            <input name={item.name} className="form-control" onChange={this.handleItemChange} value={item.quantity} type="number"/>
                                                        }

                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>
                        }
                    </div>
                </div>


                <div className="row margin-top">
                    <div className="col-xs-12">
                        <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                            Salvar

                            {this.state.loading && (
                                <i className="fa fa-spinner fa-spin"></i>
                            )}
                            
                        </button>



                        {this.state.error && !this.state.loading && (

                            <div className="alert alert-danger" role="alert">
                                Não foi possível salvar este sobrevivente no momento, tente novamente mais tarde.
                            </div>
                        )}

                        {this.state.success && !this.state.loading && (
                            <div className="alert alert-success" role="alert">
                                Sobrevivente salvo com sucesso.
                            </div>
                        )}


                    </div>
                </div>

            </form>
        );
    }
}