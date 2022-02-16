import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
function List() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h4' >
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select onChange='' value=''>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>



        </Select>
      </FormControl>
    </div>
  )
}

export default List;
