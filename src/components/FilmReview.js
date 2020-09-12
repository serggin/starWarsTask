import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    width: "48%"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
}));

const ReviewInput = ({label, onChange, className, type="text", multiline=false, rows=1, errorText=""}) => {
  const errorProps = !!errorText ? {error: true, helperText: errorText} : {};
  const props = {label, onChange, className, type, multiline, rows, required:true, variant:"outlined", ...errorProps};
  return (
    <TextField {...props} />
  );
}

const FilmReview = ({filmId, reviewMode, submitReview, clearReviewMode}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [emailError, setEmailError] = useState('');
  const classes = useStyles();

  const onUsernameChange = (value) => {
    const trimmedValue = value.trim();
    setUsername(trimmedValue);
  }

  const onEmailChange = (value) => {
    const trimmedValue = value.trim();
    setEmail(trimmedValue);
    setEmailError('');
    validateEmail();
  }

  const onReviewChange = (value) => {
    setReview(value);
  }

  const validateEmail = () => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
  }

  const validate = () => {
    const emailErrorText = 'email is not valid';
    let valid = true;
    if (!validateEmail()) {
      setEmailError(emailErrorText);
      valid = false;
    }
    return valid;
  }

  const onSubmit = () => {
    if (validate()) {
      submitReview({filmId, username, email, review});
    }
  }
  const onCancel = () => {
    clearReviewMode();
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">Review</Typography>
      {reviewMode === 'edit' &&
        <>
          <div className={classes.wrapper}>
            <ReviewInput
              label="Username"
              className={classes.input}
              onChange={e => onUsernameChange(e.target.value)}
            />
            <ReviewInput
              label="Email"
              type="email"
              className={classes.input}
              onChange={e => onEmailChange(e.target.value)}
              errorText={emailError}
            />
          </div>
          <ReviewInput
            label="Review"
            multiline={true}
            rows={5}
            onChange={e => onReviewChange(e.target.value)}
          />
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onSubmit}
              disabled={!username || !email || !!emailError || !(review.trim())}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </>
      }
      {reviewMode === 'pending' &&
        <Typography variant="body1">Review is beeing sent ...</Typography>
      }
      {reviewMode === 'sent' &&
        <>
          <Typography variant="h5">Review has been sent successfully</Typography>
          <Typography variant="body1">Username: {username}</Typography>
          <Typography variant="body1">Email: {email}</Typography>
          <Typography variant="body1">{review}</Typography>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={onCancel}
            >
              Close
            </Button>
          </div>
        </>
      }
    </div>
  );
}

export default FilmReview;
