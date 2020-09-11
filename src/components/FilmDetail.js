import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import logo from '../assets/logo.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  paper: {
    height: "100%",
  },
  logo: {
    width: "100%",
    height: 100,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}));

const FilmDetail = ({filmId, loading, title, opening_crawl}) => {
  const classes = useStyles();
  //console.log('FilmDetail props=', props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img className={classes.logo} src={logo} />
        {filmId &&
          <>
            <div className={classes.content}>
              {loading && <Typography variant="body1">Loading ...</Typography>}
              {!loading &&
                <>
                  <Typography variant="h4">{title}</Typography>
                  <Typography variant="body1">{opening_crawl}</Typography>
                </>
              }
            </div>
          </>
        }
      </Paper>
    </div>
  );
}

export default FilmDetail;
