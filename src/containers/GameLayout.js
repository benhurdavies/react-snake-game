import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import styled from 'styled-components';

import Background from '../components/game/Background';
import GameApp from './GameApp';

const gameParam = {
  blockSize: 20,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50,
  initialFrameLegth: 200,
  keysWhitelist: {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowRight: 'right',
    ArrowLeft: 'left'
  },
  invalidMove: {
    up: 'down',
    down: 'up',
    right: 'left',
    left: 'right'
  }
};

gameParam.widthInBlocks = Math.floor(gameParam.width / gameParam.blockSize);
gameParam.heightInBlocks = Math.floor(gameParam.height / gameParam.blockSize);
gameParam.width = gameParam.widthInBlocks * gameParam.blockSize;
gameParam.height = gameParam.heightInBlocks * gameParam.blockSize;

const StyleContainer = styled.div`
  width: ${gameParam.width}px;
  margin-left: auto;
  margin-right: auto;
`;

class GameLayout extends Component {
  render() {
    return (
      <StyleContainer>
        <Stage width={gameParam.width} height={gameParam.height}>
          <Layer>
            <Background
              widthInBlocks={gameParam.widthInBlocks}
              heightInBlocks={gameParam.heightInBlocks}
              size={gameParam.blockSize}
              theme={this.props.theme}
            />
          </Layer>
          <GameApp params={gameParam} />
        </Stage>
      </StyleContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.app.theme
  };
}
export default connect(mapStateToProps)(GameLayout);
