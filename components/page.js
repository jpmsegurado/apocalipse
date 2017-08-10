import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Card from './card';

const Body = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 100%;
  position: absolute;
  padding-bottom: 15px;
  overflow: auto;
`;

const Page = props => (
  <Body className="body">
    <div className={props.withoutContainer ? '' : 'container'}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAD3yTq68bvCM8xkUSaByG3LETyCQaRzmU" />
      <Card>
        {props.children}
      </Card>
    </div>
  </Body>
);

Page.propTypes = {
  withoutContainer: PropTypes.func,
};
export default Page;
