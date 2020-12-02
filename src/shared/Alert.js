import React from 'react';
import styled from 'styled-components';
import { lightTheme } from './../util/Theme';

const AlertContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  padding: 16px;
  color: #ffffff;
  background-color: ${lightTheme.primary};
`;

const Alert = ({ message }) => {
  return <AlertContainer>{message}</AlertContainer>;
};

export default Alert;
