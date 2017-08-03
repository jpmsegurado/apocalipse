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
            <Page>
                <div className="login">
                    <div className="form-group">
                        <div className="col-xs-12">
                            <label>Usuário</label>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}