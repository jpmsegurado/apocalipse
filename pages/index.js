import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import makeStore, { changeFoo } from '../store';

class Page extends Component {

  static async getInitialProps({ store }) {
    this.state = { foo: '', custom: '' };
    // component will read from store's state when rendered
    store.dispatch({ type: 'FOO', payload: 'fooeee' });
    // pass some custom props to component from here
    return { custom: 'custom' };
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Custom im { this.props.custom }</div>
        <div>Foo is { this.props.foo }</div>
        <input value={this.props.foo} onChange={(e) => { this.props.changeFoo(e.target.value); }} />
        <button onClick={changeFoo}>Change this thing</button>
      </div>
    );
  }
}

Page.propTypes = {
  custom: PropTypes.string,
  foo: PropTypes.string,
  changeFoo: PropTypes.func,
};

const mapStateToProps = state => ({ foo: state.foo });
const mapDispatchToProps = dispatch => bindActionCreators({ changeFoo }, dispatch);

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page);
