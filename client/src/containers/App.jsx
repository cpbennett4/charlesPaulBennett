import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import About from './About';
import Contact from './Contact';
import Header from '../components/common/Header';
import Home from './Home';
import Portfolio from './Portfolio';

library.add(fab);

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
