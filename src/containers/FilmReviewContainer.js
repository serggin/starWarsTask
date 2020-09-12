import React, {lazy, useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {sendReview as sendReviewApi} from '../api';
import ActionCreators from '../store/Actions';

const FilmReview = lazy(() => import('../components/FilmReview'));

const sendReview = (dispatch) => ({filmId, username, email, review}) => {
  ActionCreators.setReviewMode(dispatch)('pending');
  sendReviewApi({filmId, username, email, review})
    .then(() => {
      ActionCreators.setReviewMode(dispatch)('sent');
    });
};

const FilmReviewWrapper = ({filmId, reviewMode, sendReview, clearReviewMode}) => {
  const submitReview = ({filmId, username, email, review}) => {
    sendReview()({filmId, username, email, review});
  };
  return (
    <FilmReview {...{filmId, reviewMode, submitReview, clearReviewMode}} />
  );
}

const mapStateToProps = (state) => ({
  filmId: state.films.filmId,
  reviewMode: state.films.reviewMode,
});
const mapDispatchToProps = (dispatch) => ({
  sendReview: () => dispatch(sendReview),
  clearReviewMode: dispatch(ActionCreators.clearReviewMode),
});

const FilmReviewContainer = connect(mapStateToProps, mapDispatchToProps)(FilmReviewWrapper);

export default FilmReviewContainer;
