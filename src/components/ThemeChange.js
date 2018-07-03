import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const StyleSelect = styled(Select)`
  float: right;
  display: inline-block;
`;

const StyleLabel = styled(InputLabel)`
  font-weight: bold;
  display: inline-block;
  margin-top: 9px;
  margin-right: 5px;
`;

const ThemeChange = ({ themeName, themes, handleChange }) => (
  <div>
    <FormControl>
      <StyleLabel htmlFor="theme-select">Theme</StyleLabel>
      <StyleSelect
        value={themeName}
        onChange={handleChange}
        inputProps={{
          name: 'theme',
          id: 'theme-select'
        }}
      >
        {themes.map((_theme, index) => {
          return (
            <MenuItem key={index} value={_theme.value}>
              {_theme.name}
            </MenuItem>
          );
        })}
      </StyleSelect>
    </FormControl>
  </div>
);

export default ThemeChange;
