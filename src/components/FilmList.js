import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {

  },
  list: {

  },
  titleButton: {
    cursor: 'pointer',
  },
  itemText: {

  },
  itemTextNotSelected: {
    textDecoration: 'underline',
  },
  comment: {
    padding: 5,
  }
}));

const ListItemButton = props => <ListItem button {...props} />;

const FilmList = ({titles, selectFilm}) => {
  const [keySelected, setKeySelected] = useState(undefined);
  const classes = useStyles();
  const keys = Object.keys(titles);
  const onSelect = (key) => {
    setKeySelected(key);
    selectFilm(key);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {keys.length > 0 &&
          <>
            <div className={classes.list}>
              <List>
                {keys.map(key => (
                  <ListItemButton className={classes.titleButton} key={key} onClick={() => onSelect(key)}
                  disabled={keySelected && keySelected === key}>
                    <ListItemText
                      className={`${classes.itemText} ${(!keySelected || keySelected !== key) && classes.itemTextNotSelected}`}
                      primary={titles[key]} />
                  </ListItemButton>
                ))}
              </List>
            </div>
            <Divider />
            <div className={classes.comment}>
              <Typography align='center'>Select episode</Typography>
            </div>
          </>
        }
      </Paper>
    </div>
  );
}
// {props.titles.keys().length
FilmList.propTypes = {
  titles: PropTypes.object.isRequired,
  selectFilm: PropTypes.func.isRequired,
};

export default FilmList;
