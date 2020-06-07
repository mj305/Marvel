import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="footer-container" >       
      <Button href="https://developer.marvel.com/" target="blank" className="footer-text"><p> Copyright &copy; 2020. Marvel Comics. All Rights Reserved</p></Button>
      <Button href="https://mariabeckles.herokuapp.com/" target="blank" className="footer-text"><p> Created By <span> Maria Beckles </span></p></Button>
    </div>
  );
}