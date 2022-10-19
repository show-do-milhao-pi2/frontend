import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Questions from './pages/Questions';
import QuestionsAdd from './pages/QuestionsAdd';
import QuestionsAccept from './pages/QuestionsAccept';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/sign-up" component={SignUp} />
      <CustomRoute isPrivate exact path="/" component={Home} />
      <CustomRoute isPrivate exact path="/questions" component={Questions} />
      <CustomRoute isPrivate exact path="/questions-add" component={QuestionsAdd} />
      <CustomRoute isPrivate exact path="/questions-accept/:id" component={QuestionsAccept} />
    </Switch>
  );
}