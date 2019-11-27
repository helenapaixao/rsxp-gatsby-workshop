import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Article = styled.article`
  max-width: 350px;
  width: 100%;
  border-radius: 20px;
  padding: 35px 20px;
  height: 300px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const Container = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: #fff;
  }
`;

export default function Card({ title, path, image }) {
  return (
    <Article
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
      }}
    >
      <Container to={path}>
        <h2>{title}</h2>
      </Container>
    </Article>
  );
}
