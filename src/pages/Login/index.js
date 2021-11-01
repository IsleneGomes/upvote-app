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
    height: '100vh',
    width: '100vh',
    flexDirection: 'column',
    // padding: '2% 10%'
    flexGrow: 1,
    flexBasis: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '80%',
    height: '25%',
    margin: '25% 5%',
  },
  form: {
    display: 'flex',
    flexBasis: '30%',
    flexDirection: 'column',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  format: {
    background: '#cfcece',
    marginTop: 5,
    textAlign: 'center',
    width: '59vh'
  },
  button: {
    backgroundColor: '#676b6b',
    border: 'none',
    boxShadow: '3px 2px 2px 1px #cfcece',
    color: 'white',
    marginTop: 20,
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
      
      <div className={classes.form}>
        <form>
          <input
              type='text'
              placeholder='Digite seu username'
              className={classes.format}
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
