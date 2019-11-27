import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../styles/global';
import Header from './Header';

const Container = styled.main`
  max-width: 1040px;
  padding: 0 20px;
  margin: 60px auto 40px auto;
`;

export default function Layout({ title, children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {title && <h1>{title}</h1>}
        {children}
      </Container>
    </>
  );
}
