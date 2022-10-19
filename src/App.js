import React from 'react';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import history from './history';
import api from './api';
import { AuthProvider } from './Context/AuthContext';
import GlobalStyle from './globalStyle';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState({});
  async function getData(){
    const id = JSON.parse(localStorage.getItem('id')) 
    const {data} = await api.get(`/users/${Number(id)}`)
    setUser(data)
  }
  useEffect(() => {
      getData()
  }, []);
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Router history={history}>
      <Header avatar={user.avatar} notifications={user.notifications ?? []}/>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
