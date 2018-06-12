import React from 'react';
import styled from 'styled-components';

const BlankTile = styled.div`
  width: ${({ theme }) => theme.tileSize}px
  height: ${({ theme }) => theme.tileSize}px
  display: inline-block;
  background-color: ${({ theme, tile }) =>
    (tile.x + tile.y) % 2 ? theme.tileColor : theme['tileColor-alternate']};
`;

const Tile = ({ tile }) => {
  return <BlankTile tile={tile} />;
};

export default Tile;
