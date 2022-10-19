import React, { useState,useEffect } from 'react';
import { Div } from './styled';
import api from '../../api';
import history from '../../history'

export default function Home(props) {
  const [approved, setApproved] = useState(false);
  const [load, setLoad] = useState(false);
  const [question, setQuestion] = useState({});
  async function getData(){
    const response = await api.get(`/notifications/${props.match.params.id}`)
    const {data} = await api.get(`/questions/${response.data.question.id}`)
    setQuestion(data)
    setLoad(true)
  }
  useEffect(() => {
    getData()
  }, []);

  async function handleSubmitAccept(){
    await api.put(`/notifications/${props.match.params.id}`, {evaluation: true,
		answered: true,})
    await api.put(`/questions/${question.id}`)
    history.push('/')
  }

  async function handleSubmitNotAccept(){
    await api.put(`/notifications/${props.match.params.id}`, {evaluation: false,
		answered: true,})
    await api.put(`/questions/${question.id}`)
    history.push('/')
  }
  return (
    <div>
      <Div>
        <h2>
        Enunciado: 
        </h2>
        <p style={{color: '#fff', fontSize: '25px'}}>{question.statement}</p>
        <h2 style={{marginTop: '10px', marginBottom: '10px'}}>
        Opções 
        </h2>
        {load && question.options.map(option => {
              if(option.correct){
                  return (
                    <div key={question.id} >
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                      <h3 style={{margin: '10px', color: 'green'}}>{option.option}</h3>
                    </div>
                  );
                
              }else {
                return (
                  <div key={question.id} >
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <h3 style={{margin: '10px', color: 'red'}}>{option.option}</h3>
                  </div>
                );
              }
                })}
      </Div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={handleSubmitAccept} style={{background: 'green', width: '70px', borderRadius: '10px', margin: '10px', height: '50px', border: 'none', color: '#fff', cursor: 'pointer'}}>Aceitar</button>
        <button onClick={handleSubmitNotAccept} style={{background: 'red', width: '70px', borderRadius: '10px', margin: '10px', height: '50px', border: 'none', color: '#ff', cursor: 'pointer'}}>Reprovar</button>
      </div>
    </div>
  )
}
