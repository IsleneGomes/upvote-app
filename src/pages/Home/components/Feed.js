import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../components/PostCard/index';
// import api from '../../../service/api';

const myStyles = makeStyles({
  root: {
    width: '80%',
    padding: 24,
    alignContent: 'cen',
  }
});

const api = [
  { id: 1, title: 'Usos do Js', content: 'Post sobre os usos da linguagem JS e frameworks disponíveis', authorId: 'Islene' },
  { id: 2, title: 'Importações com Axios', content: 'Post que ensina sobre como usar a ferramenta axios', authorId: 'Islene' },
];

export default function Feed() {
const classes = myStyles();
  return (
    <div className={classes.root}>
     { api.map(post => <PostCard key={post.id} post={post} /> )}
    </div>
  )
}
