import React, { Component } from 'react';
import axios from 'axios';
import values from '../values';
import Page from '../components/page';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.changedId = this.changedId.bind(this);
    this.state = {};
  }


  submit(event) {
    event.preventDefault();

    this.setState({ loading: true, error: false });

    return axios.get(`${values.baseUrl}api/people/${this.state.id}.json`).then((res) => {
      const user = res.data;

      window.localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/people';

      this.setState({ error: false });
    }, () => {
      this.setState({ loading: false, error: true });
    });
  }

  changedId(event) {
    const value = event.target.value;

    this.setState({
      id: value,
    });
  }


  render() {
    return (
      <Page withoutContainer>
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
                width: 400px;
            }

            .login .jumbotron {
                width: 100%;
            }

        `}
        </style>

        <div className="col-xs-3 col-xs-offset-6 login">
          <div className="jumbotron">
            <form className="container" onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="id">Usuário</label>
                <input
                  id="id"
                  name="id"
                  className="form-control"
                  onChange={this.changedId}
                  type="text"
                  placeholder="Seu ID"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={this.state.loading}>
                Entrar
                {this.state.loading && (<i className="fa fa-spinner fa-spin" />)}
              </button>

              {this.state.error && !this.state.loading && (

                <div className="alert alert-danger" role="alert">
                  Usuário não encontrado
                                </div>
              )}

            </form>
          </div>
        </div>
      </Page>
    );
  }
}
