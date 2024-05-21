import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { CommandLine } from "./CommandLine";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  border: none;
  font-size: 24px;
  color: ${({ color }) => color || "white"};
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const Console = ({ color, ...props }) => {
  const [line, setLine] = useState(["C:/Users/YourComputer>"]);

  const onKeyPress = (e) => {
    if (e.charCode == 13) {
      setLine([...line, "C:/Users/YourComputer>"]);
    }
  };
  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {line.map((line) => {
          return <CommandLine color="green">{line}</CommandLine>;
        })}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color="green" {...props} />
    </Flex>
  );
};
