import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

export const Flex = (props) => {
  return <FlexWrapper {...props} />;
};
