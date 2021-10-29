import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UpvoteContext from './UpvoteContext'
import api from '../service/api';

function UpvoteProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState('loading...');
  // const [filters, setFilters] = useState({});

  
  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    setLoading(true);
    const response = await api.get('feeds');
    console.log(response);
    setData(response.data);
    setLoading(false);
  }

   const context = {
    data,
    setData,
    loading,
    setLoading,
    // filters,
    // setFilters
  };

  return (
    <UpvoteContext.Provider value={ context }>
      { children }
    </UpvoteContext.Provider>
  );
}

UpvoteProvider.propTypes = ({
  children: PropTypes.node,
}).isRequired;

export default UpvoteProvider;
