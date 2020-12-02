import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../config/Theme';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  margin-top: 1.6rem;
  color: white;
  background-color: ${lightTheme.primary};
`;

const Footer = () => {
  return <FooterContainer>Made with ❤️ by Rahhi Barbool</FooterContainer>;
};

export default Footer;
