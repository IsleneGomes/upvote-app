import React from 'react';
import Header from './components/Header/index';
import Feed from '../Home/components/Feed/Feed';
import { makeStyles } from '@material-ui/styles';

const myStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  }
})

function Home() {
  const classes = myStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
        <main className={classes.main}>
          <Feed />
        </main>
    </div>
  )
}

export default Home;
