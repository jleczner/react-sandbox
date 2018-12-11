import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from '../Home';

import '../index.css';

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid center-block' style={{width: '80%', marginTop: '25vh'}}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
