import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/common/Header.jsx';

import About from '../containers/About.jsx';
import Contact from '../containers/Contact.jsx';
import Home from '../containers/Home.jsx';
import Portfolio from '../containers/Portfolio.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
  }
}

export default App;