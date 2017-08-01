import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import Person from '../components/person';
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
                {this.props.itens.map((item) => 
                    <Person>
                        {item.name}
                    </Person>
                )}
            </Page>
        );
    }
}