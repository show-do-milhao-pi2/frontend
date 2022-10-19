import React, { useContext, useState } from 'react';
import { Context } from '../../Context/AuthContext';
import { Div, Logo } from './styled';
import showmilhao from '../../assets/images/showmilhao.png'
import history from '../../history';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nickname,
      password,
    };
    await handleLogin(data);
  };

  const pushSignUp = (e) => {
    e.preventDefault();
    history.push('/sign-up');
  }

  return (
    <div>
        <Logo>
          <img src={showmilhao} alt='logo' style={{width: '220px', height: '120px'}}/>
        </Logo>
      <Div>
        <form style={
          {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            color: 'white',
            width: '100%',
            fontFamily: 'Roboto, sans-serif'
          }
        }
        >
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginBottom: '10px'
          }
          }>Nickname</label>

          <input 
          type='text' value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '12px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />

          <label style={
            {
              fontWeight: 'bolder',
              marginBottom: '10px',
              marginTop: '30px'
          }
          }>Senha</label>
          <input 
          type='password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '12px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
  
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <button type="button" onClick={handleSubmit} 
            style={
              {
                width: '70%',
                height: '40px',
                border: 'none',
                borderRadius: '12px',
                background: '#F0D514',
                marginTop: '30px',
                color: '#FFF',
                fontWeight: 'bold'
            }
            }>Entrar</button>
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <button type="button" onClick={pushSignUp} 
            style={
              {
                width: '70%',
                height: '40px',
                borderRadius: '12px',
                border: 'none',
                background: '#FFF',
                marginTop: '30px',
                color: '#F0D514',
                fontWeight: 'bold'
            }
            }>Cadastrar-se</button>
          </div>
        </form>
      </Div>
    </div>
  )
}