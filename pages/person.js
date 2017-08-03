import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import PersonForm from '../components/person-form';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';


export default class Person extends Component {

    constructor(props) {
        super(props);
    }



    static async getInitialProps(args) {

        if(!args.query.id) return {
            person: {}
        };

        return axios.get(`${values.baseUrl}api/people/${args.query.id}.json`).then((resp) => {

            return axios.get(`${values.baseUrl}api/people/${args.query.id}/properties.json`).then((res) => {

                let person = resp.data;
                person.items = res.data;
                return {
                    person: person,
                }

            });

        }, () => {
            return;
        })
    }


    render() {

        const Span = styled.span`
            height: 20px;
            display: flex;
            align-items: center;
            width: 100%;
        `;

        return (
            <Page>

                <style jsx>
                    {`
                        .margin-bottom {
                            margin-bottom: 10px;
                        }
                    `}
                </style>

                <div className="col-xs-8 col-xs-offset-2">
                    <div className="page-header">
                        <h4>
                            Informações do sobrevivente

                            <Link href='/'>
                                <button className="btn btn-link pull-right">Voltar para o início</button>
                            </Link>
                        </h4>
                    </div>

                    <PersonForm person={this.props.person}></PersonForm> 
                </div>

            </Page>
        );
    }
}