import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import values from '../providers/values';
import Page from '../components/page';
import PersonForm from '../components/person-form';
import Loading from '../components/loading';

export default class Person extends Component {

  static async getInitialProps(args) {
    if (!args.query.id) return { person: {} };
    return axios.get(`${values.baseUrl}api/people.json`).then(resp => axios.get(`${values.baseUrl}api/people/${args.query.id}/properties.json`).then((res) => {
      const person = resp.data.find(p => p.location.split('/').pop() === args.query.id);
      person.items = res.data.map((item) => {
        const newItem = Object.assign({}, item);
        newItem.key = item.name;
        return newItem;
      });
      person.id = person.location.split('/').pop();
      return {
        person,
      };
    }));
  }

  constructor(props) {
    super(props);
    this.loadRoute = this.loadRoute.bind(this);
    this.state = {};
  }

  loadRoute() {
    this.setState({ loadingRoute: true });
    window.location.href = '/';
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
            <button onClick={this.loadRoute} className="btn btn-link pull-right">Voltar para o início</button>
          </h4>
        </div>
        <PersonForm person={this.props.person} />
      </div>
      {this.state.loadingRoute && <Loading />}
    </Page>);
  }
}

Person.propTypes = {
  person: PropTypes.objectOf(PropTypes.any),
};
