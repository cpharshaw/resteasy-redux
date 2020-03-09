import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Splash from './components/Splash/';
import MainWrapper from './components/MainWrapper/';
import Test from './test.jsx';

// import theme from './ui/theme';

// import './components/Splash/brand.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/splash" component={Splash} />

          <Route exact path="/main" component={MainWrapper} />

          {/* <Route exact path="/main" component={Test} /> */}

        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;

