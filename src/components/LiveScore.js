import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
  font-weight: bold;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 135px;
`;

const LiveScore = ({ currentScore, highScore }) => (
  <StyleDiv>
    Score/high : {currentScore}/{highScore}
  </StyleDiv>
);

export default LiveScore;
