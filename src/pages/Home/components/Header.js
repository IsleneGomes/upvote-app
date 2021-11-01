import React from 'react';
import logotipo from '../components/unnamed.png';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Bell} from 'react-feather';
import { Link } from 'react-router-dom';

const myStyles = makeStyles({
  appBar: {
    backgroundColor: '#676b6b',
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#3b3d3d',
    padding: 1,
  },
  bell: {
    marginRight: 10,
    marginLeft: 10,
  }
});

export default function Header() {
  const classes = myStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <a href='/'>
            <img src={ logotipo } alt='logotipo da Segware do Brasil' width='150px' />
          </a>
          <div className={classes.grow}></div>
          <div className="">
            <input type='text'></input>
          </div>
          <div className={classes.userSection}>
            <Button color='primary' variant='contained' className={classes.button}>
              Novo Post
            </Button>
            <SvgIcon>
              <Bell></Bell>
            </SvgIcon>
            <Link to='/login'>
              <Avatar alt='Avatar do usuário' src='' className={classes.bell}>
              </Avatar>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  )
}
