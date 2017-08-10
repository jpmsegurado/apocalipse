import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import values from '../values';
import Page from '../components/page';
import PersonForm from '../components/person-form';

export default class Person extends Component {

  static async getInitialProps(args) {
    if (!args.query.id) return { person: {} };
    return axios.get(`${values.baseUrl}api/people.json`).then(resp => axios.get(`${values.baseUrl}api/people/${args.query.id}/properties.json`).then((res) => {
      const person = resp.data.find(p => p.location.split('/').pop() === args.query.id);
      person.items = res.data;
      person.id = person.location.split('/').pop();
      return {
        person,
      };
    }));
  }

  render() {
    return (<Page>
      <div className="col-xs-8 col-xs-offset-2">
        <style jsx>{`
          .page-header {
            margin-top: 0px;
          }
        `}</style>
        <div className="page-header">
          <h4>
            Informações do sobrevivente
            <Link href="/people">
              <button className="btn btn-link pull-right">Voltar para o início</button>
            </Link>
          </h4>
        </div>
        <PersonForm person={this.props.person} />
      </div>
    </Page>);
  }
}

Person.propTypes = {
  person: PropTypes.instanceOf(PropTypes.object),
};
