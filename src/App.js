import React from 'react';
import { Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";


import { history } from "./redux/configureStore";

import MainPage from './pages/MainPage';
import Detail from './pages/Detail';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reply from "./pages/Reply";

function App() {

  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={MainPage} />
        <Route path="/detail" exact component={Detail} />
      <Route path = "/login" exact component = {Login}/>
      <Route path = "/signup" exact component = {SignUp}/>
      <Route path = "/reply" exact component = {Reply}/>
    </ConnectedRouter>

  )
}

export default App;
