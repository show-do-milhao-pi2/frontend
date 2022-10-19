import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import Header from '../../components/Header';
import { DivAccept, DivNotAccept } from './styled';
import { Link } from 'react-router-dom';
import api from '../../api';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState({});
  async function getData(){
    const id = JSON.parse(localStorage.getItem('id')) 
    const {data} = await api.get(`/users/${Number(id)}`)
    setUser(data)
    setQuestions(data.questions)
  }
  useEffect(() => {
      getData()
  }, []);

  return (
    <>
      <div>
        <div>
          <div style={{width: '40%', textAlign: 'center'}}>
          <Link to='/questions-add'>
          <button type="button" style={{
              width: '200px',
              height: '40px',
              border: 'none',
              background: '#F0D514',
              borderRadius: '25px',
              cursor: 'pointer',
              color: '#fff'
            }}>Adicionar perguntas</button>
          </Link>
          </div>
          <DivAccept>
            <h2> Perguntas aceitas</h2>
            {questions.map(question => {
              if(question.status.id === 2){
                  return (
                    <div key={question.id} >
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                      <h3 style={{margin: '10px', color: 'red'}}>{question.statement}</h3>
                    </div>
                  );
                
              }
                })}
          </DivAccept>

          <DivNotAccept>
            <h3> Perguntas não aceitas</h3>
            {questions.map(question => {
              if(question.status.id === 3){
                  return (
                    <div key={question.id} >
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                      <h3 style={{margin: '10px', color: 'red'}}>{question.statement}</h3>
                    </div>
                  );
                
              }
                })}
          </DivNotAccept>
        </div>
  
      </div>

    </>
  );
}
