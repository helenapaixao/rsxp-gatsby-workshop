import React from "react";
import styled from 'styled-components';

import Layout from "../components/Layout";
import Card from "../components/Card";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 100%;
`;

export default function Index() {
  return (
    <Layout>
      <Cards>
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
        <Card
          title="Criando um blog com React"
          image="https://joaopedro.cc/img/upload/form-hooks-banner.png"
          path="/blog"
        />
      </Cards>
    </Layout>
  )
}
