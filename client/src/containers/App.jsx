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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showingPdf: false,
    };

    this.showPdf = () => {
      this.setState({ showingPdf: true });
    };

    this.removePdf = () => {
      this.setState({ showingPdf: false });
    };
  }

  render() {
    const { showingPdf } = this.state;
    return (
      <div className="App">
        <Header
          removePdf={this.removePdf}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                showingPdf={showingPdf}
                showPdf={this.showPdf}
                removePdf={this.removePdf}
              />)
            }
          />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
