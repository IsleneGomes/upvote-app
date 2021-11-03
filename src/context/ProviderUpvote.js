import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './ContextUpvote';

export default function ProviderUpvote({ children }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
   const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [post, setPost] = ([]);

  // useEffect(() => {
  //   const getAPI = async () => {
  //     const endpoint = 'http://segware-book-api.segware.io/api/sign-in';
  //     const result = await fetch(endpoint)
  //     const data = await result.json();
  //     console.log(data)
  //     setUser(data);
  //   };
  //   getAPI();
  // })

   const context = {
    user,
    setUser,
    password,
    setPassword,
    content,
    setContent,
    title,
    setTitle,
    post,
    setPost,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
}

ProviderUpvote.propTypes = ({
  children: PropTypes.node,
}).isRequired;