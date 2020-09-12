import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, FormControl, FormLabel, FormHelperText, OutlinedInput, TextField } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    //marginBottom: 10,
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

const ReviewInput0 = ({label, type="text", multiline=false, value, onChange, helper, error, rows=1}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.input}>
      <FormLabel>{label}</FormLabel>
      <FormHelperText className={classes.loginInputHelper}>{helper}</FormHelperText>
      <OutlinedInput fullWidth type={type} value={value} onChange={onChange} error={error} required rows={rows}/>
    </FormControl>
  );
}

const ReviewInput = ({label, onChange, className, type="text", multiline=false, rows=1, errorText=""}) => {
  const errorProps = !!errorText ? {error: true, helperText: errorText} : {};
  const props = {label, onChange, className, type, multiline, rows, required:true, variant:"outlined", ...errorProps};
  return (
    <TextField {...props} />
  );
}


const FilmReview = ({filmId, pending}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  //const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  //const [reviewError, setReviewError] = useState('');
  const classes = useStyles();

  const onUsernameChange = (value) => {
    const trimmedValue = value.trim();
    setUsername(trimmedValue);
    //setUsernameError('');
  }

  const onEmailChange = (value) => {
    const trimmedValue = value.trim();
    setEmail(trimmedValue);
    setEmailError('');
    validateEmail();
  }

  const onReviewChange = (value) => {
    setReview(value);
    //setReviewError('');
  }

  const validateEmail = () => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    console.log('validateEmail()', email, pattern.test(email));
    return pattern.test(email);
  }

  const validate = () => {
    //const requiredErrorText = 'field is required';
    const emailErrorText = 'email is not valid';
    let valid = true;
    /*if (!username) {
      setUsernameError(requiredErrorText);
    }
    if (!email) {
      setEmailError(requiredErrorText);
    } else*/ if (!validateEmail()) {
      setEmailError(emailErrorText);
      valid = false;
    }
    /*if (!review.trim()) {
      setReviewError(requiredErrorText);
    }*/
    return valid;
  }

  const onSubmit = () => {
    if (validate()) {
      alert('Valid');
    } else {
      alert('Errors');
    }
  }
  const onCancel = () => {
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">Review</Typography>
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
    </div>
  );
}

export default FilmReview;
