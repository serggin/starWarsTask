import React, {lazy, Suspense, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

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
  logoContainer: {
    backgroundColor: "#09080E",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
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
  const [FilmReviewContainer, setFilmReviewContainer] = useState(null);
  const classes = useStyles();
  const showReviewForm = () => {
    setReviewMode('edit');
    if (!FilmReviewContainer) {
      const imported = lazy(() =>
        import('../containers/FilmReviewContainer')
      );
      setFilmReviewContainer(imported);
    }
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} />
        </div>
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
                  {reviewMode && FilmReviewContainer &&
                  <Suspense fallback={<Typography variant="body1">Loading ...</Typography>}>
                    <FilmReviewContainer />
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
