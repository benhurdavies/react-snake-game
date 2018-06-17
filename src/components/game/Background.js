import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

const Background = ({ widthInBlocks, heightInBlocks, size, theme }) => {
  debugger;
  return Array(heightInBlocks).fill(0).map((_, y) => {
    return Array(widthInBlocks)
      .fill(0)
      .map((_, x) => (
        <Tile
          key={`t_${x}|${y}`}
          x={x}
          y={y}
          size={size}
          theme={theme}
        />
      ));
  });
};

const Tile = ({ x, y, size, theme }) => {

  return (
    <Rect
      style={{ backgroundColor: "red" }}
      x={x*size}
      y={y*size}
      width={size}
      height={size}
      fill={(x + y) % 2 ? theme.tileColor : theme["tileColor-alternate"]}
    />
  );
};

export default Background;
