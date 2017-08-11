import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 79px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

const Loading = () => (
  <Div>
    <i className="fa fa-spinner fa-spin" />
  </Div>
);

export default Loading;
