import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import { makeStyles } from '@material-ui/styles';
import { Box, Container } from '@material-ui/core';

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

export default function Home() {
  const classes = myStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
        <main className={classes.main}>
        <Container maxWidth='lg'>
          <Box display='flex'>
            {/* <Navbar /> */}
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  )
}
