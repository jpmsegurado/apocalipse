import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Page from '../components/page';
import values from '../providers/values';


export default class Update extends Component {
  render() {
    return (
      <Page>
        
      </Page>
    );
  }
}

Update.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.object),
};
