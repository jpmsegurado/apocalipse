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

        return axios.get(`${values.baseUrl}api/people/${args.query.id}.json`).then((resp) => {
            const person = resp.data;
            return {
                person: person
            }
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
                <div className="page-header">
                    <h4>Informações do sobrevivente</h4>
                </div>

                 <PersonForm person={this.props.person}></PersonForm> 

            </Page>
        );
    }
}