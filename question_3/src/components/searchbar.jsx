import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
// import { createFilterOptions } from '@mui/core';
import { top100Films } from '../models/dummyData';

// const filter = createFilterOptions();

const SearchBar = (props) => {

  // const [value, setValue] = useState(null);

  // return (
  //   <Autocomplete
  //     value={value}
  //     onChange={(event, newValue) => {
  //       debugger;
  //       if (typeof newValue === 'string') {
  //         setValue({
  //           title: newValue,
  //         });
  //       } else if (newValue && newValue.inputValue) {
  //         // Create a new value from the user input
  //         setValue({
  //           title: newValue.inputValue,
  //         });
  //       } else {
  //         setValue(newValue);
  //       }
  //     }}
  //     filterOptions={(options, params) => {
  //       const filtered = filter(options, params);

  //       const { inputValue } = params;
  //       // Suggest the creation of a new value
  //       const isExisting = options.some((option) => inputValue === option.title);
  //       if (inputValue !== '' && !isExisting) {
  //         filtered.push({
  //           inputValue,
  //           title: `Add "${inputValue}"`,
  //         });
  //       }

  //       return filtered;
  //     }}
  //     selectOnFocus
  //     clearOnBlur
  //     handleHomeEndKeys
  //     id="free-solo-with-text-demo"
  //     options={top100Films}
  //     getOptionLabel={(option) => {
  //       // Value selected with enter, right from the input
  //       if (typeof option === 'string') {
  //         return option;
  //       }
  //       // Add "xxx" option created dynamically
  //       if (option.inputValue) {
  //         return option.inputValue;
  //       }
  //       // Regular option
  //       return option.title;
  //     }}
  //     renderOption={(props, option) => <li {...props}>{option.title}</li>}
  //     sx={{ width: 300 }}
  //     freeSolo
  //     renderInput={(params) => (
  //       <TextField {...params} label="Free solo with text demo" />
  //     )}
  //   />
  // );
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

export default { SearchBar };