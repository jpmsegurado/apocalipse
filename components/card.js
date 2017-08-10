import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 30px;
  margin-top: 15px;
  float: left;
  width: 100%;
`;

const Card = props => (
  <CardDiv >
    {props.children}
  </CardDiv>
);

export default Card;
