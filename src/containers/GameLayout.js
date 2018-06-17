import React, { Component } from "react";
import { connect } from "react-redux";
import { Stage, Layer } from "react-konva";
import styled from "styled-components";

import Background from "../components/game/Background";
import GameApp from './GameApp';


class GameLayout extends Component {
  render() {
    return <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
     <Background
          widthInBlocks={Math.floor(window.innerWidth/20)}
          heightInBlocks={Math.floor(window.innerHeight/20)}
          size={20}
          theme={this.props.theme}
        /> 
      </Layer>
      <GameApp/>
    </Stage>
  }
}

function mapStateToProps(state) {
  return {
    theme: state.app.theme
  };
}
export default connect(mapStateToProps)(GameLayout);
