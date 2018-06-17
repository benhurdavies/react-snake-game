import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

const Background = ({ width, height }) => (
  <Rect style={{backgroundColor:'red'}}
    x={0}
    y={0}
    width={width}
    height={height}
    fill="#eee"
    // fillLinearGradientStartPoint={{ x: 0, y:height }}
    // fillLinearGradientEndPoint={{ x: width, y: height }}
    // fillLinearGradientColorStops={[.5, "red", .5, "yellow",]}
    // fillPatternX="500"
    // fillPatternRepeat="repeat"
  />
);

export default Background;
