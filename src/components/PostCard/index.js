import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import Context from '../../context/ContextUpvote';
import moment from 'react-moment';

const myStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
  subheader: {
    display: 'flex',
    alignItems: 'cen',
    marginLeft: 16,
  },
  caption: {
    marginRight: 8,
    marginLeft: 8,
  },
  card: {
    display: 'flex',
    justifyItems: 'cen',
    margin: '0 auto',
    padding: 16,
  },
  post: {
    marginRight: 8,
    marginLeft: 23,
  },
  avatar: {
    marginRight: 32,
  },
});

export default function PostCard() {
  const { post } = useContext(Context);

  const handleclick = (contador) => {
    contador  = 0
    return contador += 1;
  }

const classes = myStyles();
  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.card}>
          <Typography variant='h6'>{post.title}</Typography>
        </div>
        <div className={classes.subheader}>
          <Typography variant='caption' className={classes.caption}>
            {'Criado por'}
          </Typography>
          <Typography variant='subtitle2' className={classes.caption}>
            {post.user}
          </Typography>
          <Typography variant='caption' className={classes.caption}>{ moment(post.date).fromNow()}</Typography>
        </div>
        <div className={classes.post}>
          <Typography variant='subtitle2' className={classes.description}>
            {post.content}
          </Typography>
        </div> 
        
      </div>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Typography style={{cursor: 'pointer'}} color='textSecondary' variant='body2'>
          {handleclick}
        </Typography>
      </CardActions>
    </Card>
  )
}
