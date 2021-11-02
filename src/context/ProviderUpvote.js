import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './ContextUpvote';
// import axios from 'axios';
import axios from '../utils/axios';

export default function ProviderUpvote({ children }) {
  const [user, setUser] = useState({});
  const [password, setPassword] = useState({});

  const handleclick = async () => {
    const response = await axios.post('/api/sign-in')
    setUser(response.data)
  }

  // useEffect(() => {
  //   const getAPI = async () => {
  //     const endpoint = 'http://segware-book-api.segware.io/api';
  //     const { data } = await fetch(endpoint).then((api) => api.json());
  //     setData(data);
  //   };
  //   getAPI();
  // })
  const contexto = {
    user,
    setUser,
    handleclick,
    password,
    setPassword
  }
  return (
    <Context.Provider value={ contexto }>
      { children }
    </Context.Provider>
  )
}

ProviderUpvote.propTypes = ({
  children: PropTypes.node,
}).isRequired;