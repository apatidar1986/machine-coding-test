import { useEffect, useState } from "react";
import { styled, Styled } from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 250px;
  padding: 10px;
  background-color: black;
  border-radius: 5%;
`;

const Light = styled.div`
  width: 40px;
  margin: 10px 10px;
  padding: 15px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px double gray;
`;

export const TrafficSignal = () => {
  const [color, setColor] = useState("red");

  const timeColorMapping = {
    red: 3000,
    yellow: 1000,
    green: 2000,
  };

  useEffect(() => {
    setTimeout(() => {
      if (color === "red") {
        setColor("green");
      } else if (color === "green") {
        setColor("yellow");
      } else {
        setColor("red");
      }
    }, timeColorMapping[color]);
  }, [color]);
  return (
    <div>
      <Box>
        <Light color={color === "red" ? "red" : "balck"} />
        <Light color={color === "yellow" ? "yellow" : "balck"} />
        <Light color={color === "green" ? "green" : "balck"} />
      </Box>
    </div>
  );
};
