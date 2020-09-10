import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FilmListContainer from '../containers/FilmListContainer';
import FilmDetail from './FilmDetail';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
}));

const FilmsWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FilmListContainer />
      <FilmDetail />
    </div>
  );
}

export default FilmsWrapper;
