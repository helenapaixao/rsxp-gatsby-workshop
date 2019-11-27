import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  background: #7159c1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Container = styled.section`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      padding-left: 25px;
      font-size: 1rem;
      color: #fff;
      transition: opacity 200ms ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img
            src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
            alt="Logo"
            title="Blog da Rocketseat"
          />
        </Link>
        <ul>
          <li>
            Node.js
          </li>
          <li>
            React
          </li>
          <li>
            React Native
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
}
