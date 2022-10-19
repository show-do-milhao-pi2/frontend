import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.authorization = `${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(dataLogin) {
    try {
      const { data: { accessToken, id } } = await api.post('/users/login', dataLogin)
      api.defaults.headers.authorization = `${accessToken}`;
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('token', JSON.stringify(accessToken));
      setAuthenticated(true);
      history.push('/home');
    } catch (error) {
      console.log(error)
    }


  }
  async function handleSignUp(dataSignUp) {
    try {
      const { data: { accessToken, id } } = await api.post('/users', dataSignUp)
      api.defaults.headers.authorization = `${accessToken}`;
      localStorage.setItem('token', JSON.stringify(accessToken));
      localStorage.setItem('id', JSON.stringify(id));
      setAuthenticated(true);
      history.push('/home');
    } catch (error) {
      console.log(error)
    }


  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout, handleSignUp };
}