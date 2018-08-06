import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/common/Header';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
