import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

const LayoutContainer: React.FC = props => {
  return <Test>{props.children}</Test>;
};

export default LayoutContainer;
