import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import logo from '../assets/logo.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {

  },
  logo: {

  },
}));

const FilmDetail = ({filmId, loading, title, opening_crawl}) => {
  const classes = useStyles();
  //console.log('FilmDetail props=', props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography>FilmDetail</Typography>
        {filmId &&
          <>
            <img className={classes.logo} src={logo} />
            {loading && <Typography>Loading ...</Typography>}
            {!loading &&
              <>
                <Typography>{title}</Typography>
                <Typography>{opening_crawl}</Typography>
              </>
            }
          </>
        }
      </Paper>
    </div>
  );
}

export default FilmDetail;
