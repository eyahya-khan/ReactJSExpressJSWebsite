import styled, { css } from "styled-components";

export const Display = styled.div`
  font-family: sans-serif;
  margin-top: -50px;
  margin-bottom: 30px;
  font-size: 16px;
  text-align: center;
`;

export const Title = styled.p`
  font-family: sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  background-color: #ffffff;
`;

export const Input = styled.input`
  width: 55px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.25em 1em;
  text-align: center;
  &:hover {
    background: #217844;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: #ffffff;
    `}
  &:hover {
    background: #217844;
    color: #ffffff
  }
`;