// src/hooks/useAuthToken.js
import { useState, useEffect } from 'react';

const useAuthToken = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem('authToken'));

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('authToken', token);
    } else {
      sessionStorage.removeItem('authToken');
    }
  }, [token]);

  const saveToken = (newToken) => {
    setToken(newToken);
  };

  const removeToken = () => {
    setToken(null);
  };

  const getToken = () =>{
    return sessionStorage.getItem('authToken')
  }

  return { token, saveToken, removeToken,getToken };
};

export default useAuthToken;

