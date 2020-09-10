import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FilmListContainer from '../containers/FilmListContainer';
import FilmDetailContainer from '../containers/FilmDetailContainer';

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
      <FilmDetailContainer />
    </div>
  );
}

export default FilmsWrapper;
