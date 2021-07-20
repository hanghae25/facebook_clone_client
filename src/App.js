import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/configureStore';

import MainPage from './pages/MainPage';
import Detail from './pages/Detail';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={MainPage} />
        <Route path="/detail" exact component={Detail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
