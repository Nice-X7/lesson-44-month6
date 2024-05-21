import styled from "styled-components";

const ConsoleTittle = styled.h1`
  color: ${(props) => props.color};
  margin: auto;
  padding-top: 10px;
  font-size: 38px;
`;

export const Tittle = (props) => {
  return <ConsoleTittle {...props} />;
};
