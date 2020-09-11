import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FilmsWrapper from './components/FilmsWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    //backgroundColor: '#bbb',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

const AppView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FilmsWrapper />
    </div>
  );
}

export default AppView;
