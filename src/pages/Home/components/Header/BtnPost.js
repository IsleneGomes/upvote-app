import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const myStyles = makeStyles({
  button: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#3b3d3d',
    padding: 1,
  },
});

export default function BtnPost() {
  const classes = myStyles();
  const history = useHistory();

const handleclick = async () => {
  try {
    history.push('/home/new');
    console.log('CLICK')
    // const userData = await authService.signIn(user, password);
  } catch (error) {
    console.log('Erro: Deu ruim');
  }
}
  return (
    <Button
      color='primary'
      variant='contained'
      className={classes.button}
      onClick={handleclick}
    >
      Novo Post
    </Button>
  )
}
