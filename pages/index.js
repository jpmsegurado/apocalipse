import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import Link from 'next/link';


export default class People extends Component {

    constructor(props) {
        super(props);
    }




    render() {
        return (
            <Page withoutContainer={true}>

                <style jsx>
                    {`
                        .login {
                            display: flex;
                            position
                            align-item: center;
                        }

                        label {
                            height: 30px;
                            margin: 0;
                        }

                        .login {
                            position: absolute;
                            margin: auto;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            right: 0;
                            height: 239px;
                        }

                    `}
                </style>

                <div className="col-xs-3 col-xs-offset-6 login">
                    <div className="jumbotron">
                            <div className="container">
                                    <div className="form-group">
                                    <label>Usuário</label>
                                    <input className="form-control" type="text" placeholder="Seu ID"/>
                                </div>

                                <button className="btn btn-primary btn-block">Entrar</button>
                            </div>
                    </div>
                </div>
            </Page>
        );
    }
}