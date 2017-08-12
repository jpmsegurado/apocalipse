import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import User from '../providers/user';
import Page from '../components/page';
import PersonForm from '../components/person-form';
import Loading from '../components/loading';

export default class Person extends Component {

  static async getInitialProps(args) {
    if (!args.query.id) return { person: {} };
    this.userService = new User();
    return await this.userService.getFullInfo(args.query.id);
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
