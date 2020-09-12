import React, {lazy, Suspense, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

import logo from '../assets/logo.jpeg';
//import FilmReview from './FilmReview';

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

/*
const ErrorImport = (text) => (() =>
  <Typography color='error'>{text}</Typography>
);
*/

const FilmDetail = ({filmId, loading, title, opening_crawl, reviewMode, setReviewMode, clearReviewMode}) => {
  const [FilmReview, setFilmReview] = useState(null);
  const classes = useStyles();
  //console.log('FilmDetail props=', props);
  const showReviewForm = () => {
    setReviewMode('edit');
    if (!FilmReview) {
      const imported = lazy(() =>
        import('./FilmReview')
        //.catch(error => ErrorImport(error))
      );
      setFilmReview(imported);
    }
  }
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
                  {!reviewMode &&
                    <Button variant="contained" color="primary" onClick={() => showReviewForm()}>
                      Make a Review
                    </Button>
                  }
                  {reviewMode && FilmReview &&
                  <Suspense fallback={<Typography variant="body1">Loading ...</Typography>}>
                    <FilmReview />
                  </Suspense>
                  }
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
