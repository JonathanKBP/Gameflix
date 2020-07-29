import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 20px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition-property: border, color;
  transition-duration: .5s;

  &:hover,
  &:focus {
  color: var(--primary);
  border-color: var(--primary);
  }
`;

export default Button;