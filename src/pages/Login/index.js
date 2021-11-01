import React from 'react';
import logo from '../Home/components/unnamed.png';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const myStyles = makeStyles({
  root: {
    display: 'flex',

  },
  mainlogo: {
    backgroundColor: '#676b6b',
    height: '88vh',
    width: '100vh',
    padding: '2% 10%'
  },
  logo: {
    margin: '35% 0',
    width: '90vh',
    height: '20vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'cen',
    margin:'70% 15%',
    width: '60vh',
    height: 0,
    backgroundColor: '#676b6b', 
  },
  format: {
    marginTop: 5,
    textAlign: 'center',
    background: '#cfcece',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#676b6b',
    color: 'white',
    border: 'none',
    boxShadow: '3px 2px 2px 1px #cfcece',
    width: '60vh',
  }
});


export default function index() {
  const classes = myStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainlogo}>
        <img
          className={classes.logo}
          src={logo}
          alt='logotipo da Segware do Brasil'
        />
      </div>
      <div>
        <form className={classes.form}>
          <
            input type='text' placeholder='Digite seu username' className={classes.format}
          />
          <
            input type='password' placeholder='Digite a senha' className={classes.format}
          />
          <Link to='/'>
            <Button color='primary' variant='contained' className={classes.button}>
              Entrar
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}
