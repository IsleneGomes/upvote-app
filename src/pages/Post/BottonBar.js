import { AppBar, Button, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ContextUpvote from '../../context/ContextUpvote';
import { useHistory } from 'react-router-dom';

const myStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    justifyItems: 'center',
  },
  button: {
    marginRight: 16, 
  },
  toolbar: {
    display: 'flex', 
  },
});

export default function BottonBar() {
  const classes = myStyles();
    const {
    user,
    title,
    content,
    setPost,
  } = useContext(ContextUpvote);

  const contexto = { user, title, content }
  const history = useHistory()

  const handleSaveDraft = () => {
      //salva
  };
  const handlePublish = () => {
      history.push('/home')
      setPost(contexto);
  };

  return (
    <AppBar
        position='fixed'
        color='inherit'
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            className={classes.button}
            variant='outlined'
            onClick={handleSaveDraft}
          >
            Salvar Rascunho
          </Button>
          <Button
          color='secundary'
          variant='outlined'
          onClick={handlePublish}
          >
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
  )
}
