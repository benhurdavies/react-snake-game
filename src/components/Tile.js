import React from 'react';
import styled from 'styled-components';

import Snake from './snake';

export const BlankTile = styled.div`
  width: ${({ theme }) => theme.tileSize}px;
  height: ${({ theme }) => theme.tileSize}px;
  display: inline-block;
  background-color: ${({ theme, tile }) =>
    (tile.x + tile.y) % 2 ? theme.tileColor : theme['tileColor-alternate']};
`;

const Tile = ({ tile }) => {
  return <ChooseTile tile={tile} />;
};

const ChooseTile = props => {
  if (!props.tile.aboveIt) {
    return <BlankTile {...props} />;
  }
  if (props.tile.aboveIt.name === 'snake') {
    return <Snake {...props} />;
  } else {
    throw Error(`Not implemented tile: ${props.tile.aboveIt.name}`);
  }
};

export default Tile;
