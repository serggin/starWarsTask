import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {

  },
}));

const FilmList = (props) => {
  const classes = useStyles();
  console.log('FilmList props=', props);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography>FilmList | }</Typography>
      </Paper>
    </div>
  );
}
// {props.titles.keys().length
FilmList.propTypes = {
  titles: PropTypes.object.isRequired
};

export default FilmList;
