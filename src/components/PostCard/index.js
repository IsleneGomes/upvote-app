import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
// import Context from '../../context/Context';

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

export default function PostCard({post}) {
  // const { user } = useContext(Context);

  const handleclick = (contador) => {
    contador  = 0
    return contador += 1;
  }

const classes = myStyles();
  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.card}>
          <Avatar src={post.authorId} className={classes.avatar}/>
          <Typography variant='h6'>{post.title}</Typography>
        </div>
        <div className={classes.subheader}>
          <Typography variant='caption' className={classes.caption}>
            {'Avaliado por'}
          </Typography>
          <Typography variant='subtitle2' className={classes.caption}>
            {post.authorId}
          </Typography>
          <Typography variant='caption' className={classes.caption}>{post.date}</Typography>
        </div>
        <div className={classes.post}>
          <Typography variant='subtitle2' className={classes.description}>
            {post.content}
          </Typography>
        </div> 
        
      </div>
      {/* <CardContent>
      
      </CardContent> */}
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Typography style={{cursor: 'pointer'}} color='textSecondary' variant='body2'>
          {() => handleclick}
        </Typography>
      </CardActions>
    </Card>
    // <div>
    //   {post.description}
    // </div>
  )
}
