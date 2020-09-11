import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FilmListContainer from '../containers/FilmListContainer';
import FilmDetailContainer from '../containers/FilmDetailContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  list: {
    flex: 3,
    paddingRight: 5,
  },
  detail: {
    flex: 7,
    paddingLeft: 5,
  }
}));

const FilmsWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <FilmListContainer />
      </div>
      <div className={classes.detail}>
        <FilmDetailContainer />
      </div>
    </div>
  );
}

export default FilmsWrapper;
