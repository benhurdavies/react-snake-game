import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const StyleSelect = styled(Select) `
  float: right;
  display:inline-block;
`;

const StyleLabel = styled(InputLabel) `
  font-weight: bold;
  display: inline-block;
  margin-top: 9px;
  margin-right: 5px;
  color: #fff !important; 
`;

const ThemeChange = ({ themeName, themes, handleChange }) => (
  <div>
    <StyleLabel>Theme</StyleLabel>
    <StyleSelect value={themeName} onChange={handleChange}>
      {themes.map((_theme, index) => {
        return (
          <MenuItem key={index} value={_theme.value}>
            {_theme.name}
          </MenuItem>
        );
      })}
    </StyleSelect>
  </div>
);

export default ThemeChange;
