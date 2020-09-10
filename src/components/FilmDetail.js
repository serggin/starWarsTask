import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {

  },
}));

const FilmDetail = (props) => {
  const classes = useStyles();
  console.log('FilmDetail props=', props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography>FilmDetail</Typography>
      </Paper>
    </div>
  );
}

export default FilmDetail;
