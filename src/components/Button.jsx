import React from "react";
import styled from "styled-components";

const Send = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  color: green;
  background-color: #000;
  align-self: flex-end;
  margin-right: 20px;
  border: 1px solid green;
  cursor: pointer;
`;

export const Button = (props) => {
  return <Send {...props} />;
};
