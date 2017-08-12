import React, { Component } from 'react';
import Page from '../components/page';
import Loading from '../components/loading';
import PersonForm from '../components/person-form';
import User from '../providers/user';


export default class Update extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.userService = new User();
    this.findUser = this.findUser.bind(this);
    this.changedInput = this.changedInput.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  findUser() {
    this.setState({ loading: true, error: false });
    this.userService.getFullInfo(this.state.searchId).then((res) => {
      this.setState({ loading: false, user: res.person });
    }, () => {
      this.setState({ loading: false, error: true });
    });
  }

  changedInput(event) {
    const searchId = event.target.value;
    this.setState({ searchId });
  }

  goBack() {
    this.setState({ loadingRoute: true });
    window.location.href = '/';
  }

  render() {
    return (
      <Page>
        <style jsx>{`
          .alert-warning {
            margin-top: 10px;
          }
          .page-header {
            margin-top: 0px;
          }
        `}</style>
        {!this.state.user && <div className="col-xs-8 col-xs-offset-2">
          <div className="form-group">
            <label htmlFor="id">Seu ID</label>
            <input className="form-control" onChange={this.changedInput} type="text" id="id" />
          </div>

          <button
            onClick={this.findUser}
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            Carregar meu perfil
            {this.state.loading && <i className="fa fa-spinner fa-spin" />}
          </button>

          {this.state.error && <div className="alert alert-warning">
            Nenhum sobrevivente encontrado com este ID.
          </div>}

        </div>}
        {this.state.user && <div>
          <div className="page-header">
            <h4>
              Atualizar sua localização
              <button onClick={this.goBack} className="btn btn-link pull-right">
                Voltar ao início
              </button>
            </h4>
          </div>
          <PersonForm person={this.state.user} editing />
        </div>}
        {this.state.loadingRoute && <Loading />}
      </Page>
    );
  }
}
