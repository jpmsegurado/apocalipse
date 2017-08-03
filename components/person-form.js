import values from '../values';
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';


export default class PersonForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: props.person
        };

        console.log(props.person);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true });
        
        if(this.state.person.id) {
            return axios.patch(`${values.baseUrl}api/people/${this.props.person.id}.json`, this.state.person).then(() => {
                this.setState({ loading: false, success: true });
                window.location.href = '/';
            }, (err) => {
                this.setState({ loading: false, error: true });
            });
        } else {
            return axios.post(`${values.baseUrl}api/people.json`, Object.assign({}, this.state.person, {
                items: ''
            })).then(() => {
                this.setState({ loading: false, success: true });
                window.location.href = '/';
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

            <form className="row" onSubmit={this.handleSubmit}>

                <style jsx>{`
                    input[type="radio"] {
                        margin: 0 5px 0 0;
                    }

                    .fa {
                        margin-left: 5px;
                    }

                    .alert {
                        margin-top: 10px;
                    }

                `}</style>

                <div className="col-xs-3">
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                            type="text" className="form-control" 
                            onChange={this.handleInputChange} 
                            name="name"
                            value={this.state.person.name}/>
                    </div>
                </div>

                <div className="col-xs-3">
                    <div className="form-group">
                        <label>Idade</label>
                        <input 
                            type="number" className="form-control" 
                            onChange={this.handleInputChange} 
                            name="age"
                            value={this.state.person.age}/>
                    </div>
                </div>

                <div className="col-xs-3">
                    <div className="form-group">
                        <label>Infectado?</label>
                        <Span>
                                <input 
                                    type="radio" 
                                    onChange={this.handleInputChange} 
                                    name="infected"
                                    value={true}
                                    checked={this.state.person.infected}/>

                                Sim
                        </Span>

                        <Span>
                                <input 
                                    type="radio" 
                                    onChange={this.handleInputChange} 
                                    name="infected"
                                    value={false}
                                    checked={!this.state.person.infected}/>

                                Não
                        </Span>
                    </div>
                </div>

                <div className="col-xs-3">
                    <div className="form-group">
                        <label>Gênero</label><br />
                        <Span>
                                <input 
                                    type="radio" 
                                    onChange={this.handleInputChange} 
                                    name="gender"
                                    value="M"
                                    checked={this.state.person.gender === 'M'}/>

                                Masculino
                        </Span>

                        <Span>
                                <input 
                                    type="radio" 
                                    onChange={this.handleInputChange} 
                                    name="gender"
                                    value="F"
                                    checked={this.state.person.gender === 'F'}/>

                                Feminino
                        </Span>
                    </div>
                </div>

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

            </form>
        );
    }
}