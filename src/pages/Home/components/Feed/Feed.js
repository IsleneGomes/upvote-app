import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../../components/PostCard/index';
import { Box, Container } from '@material-ui/core';
import ContextUpvote from '../../../../context/ContextUpvote';

const myStyles = makeStyles({
  root: {
    width: '80%',
    padding: 24,
    alignContent: 'center',
  }
});

export default function Feed() {
const { post } = useContext(ContextUpvote);
console.log(post)

const classes = myStyles();
  return (
    <Container>
      <Box>
        <div className={classes.root}>
        { !post ? <h1>Loading...</h1>
        : post.map(post => <PostCard key={post.id} post={post} /> )}
        </div>
      </Box>
    </Container>
  )
}
