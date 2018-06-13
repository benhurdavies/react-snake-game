import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const StyleSelect = styled(Select)`
  float: right;
`;

const ThemeChange = ({ themeName, themes, handleChange }) => (
  <StyleSelect value={themeName} onChange={handleChange}>
    {themes.map((_theme, index) => {
      return (
        <MenuItem key={index} value={_theme.value}>
          {_theme.name}
        </MenuItem>
      );
    })}
  </StyleSelect>
);

export default ThemeChange;
