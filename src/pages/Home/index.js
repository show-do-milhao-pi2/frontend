import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import showmilhao from '../../assets/images/showmilhao.png'
import play from '../../assets/images/play.png'
import { Div } from './styled';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Div>
        <div>
          <button type="button" style={{
            width: '300px',
            height: '50px',
            border: 'none',
            background: '#F0D514',
            borderRadius: '25px',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
          }}><span>Jogar</span> {<img src={play} alt='play' style={{ width: '25px', height: '25px', marginLeft: '30px'}}></img>}</button>
          <Link to="/questions" style={{textDecoration: 'none'}}>
            <button type="button" style={{
              width: '300px',
              height: '50px',
              border: 'none',
              background: '#F0D514',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff'
            }}>Perguntas</button>
          </Link>
          <button type="button" style={{
            width: '300px',
            height: '50px',
            border: 'none',
            background: '#F0D514',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            alignItems: 'center',
            color: '#fff'
          }}>Ranking</button>
        </div>
        <div>
          <img src={showmilhao} alt='logo' style={{marginLeft: '100px'}}></img>
        </div>
      </Div>

    </>
  );
}
