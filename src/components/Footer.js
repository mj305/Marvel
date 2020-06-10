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
    <div className={`${classes.root} bottom-menu`} >
      <Button href="http://marvel.com" target="blank" >Data provided by Marvel. © 2020 MARVEL</Button>
        <span> </span>
      <Button href="https://mariabeckles.herokuapp.com/" target="blank" color="primary"> Created By Maria Beckles </Button>
    </div>
  );
}








/* import React from 'react';
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
    <div className={classes.root} className="bottom-menu" >       
      <Button href="https://developer.marvel.com/" target="blank"><p className="footer-text" > Copyright &copy; 2020. Marvel Comics. All Rights Reserved</p></Button>
      <Button href="https://mariabeckles.herokuapp.com/" target="blank"><p className="footer-text" > Created By <span> Maria Beckles </span></p></Button>
    </div>
  );
} */

