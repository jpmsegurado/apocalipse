import values from '../values';
import React, { Component } from 'react';
import Page from '../components/page';
import axios from 'axios';
import Link from 'next/link';


export default class Person extends Component {

    constructor(props) {
        super(props);
    }



    static async getInitialProps(args) {
        return axios.get(`${values.baseUrl}api/people/${args.req.url.split('/').pop()}.json`).then((resp) => {
            const person = resp.data;
            return {
                person: person
            }
        }, () => {
            return;
        })
    }

    render() {
        return (
            <Page>
                <div className="row">
                    <div className="col-xs-3">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" value={this.props.person.name}/>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}