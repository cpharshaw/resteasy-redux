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


  /* minified */
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
  

  /* usage */

  var myEfficientFn = debounce(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, 250);

  var loadedFn = () => {
    myEfficientFn();
    window.scrollTo(0,1);    
    console.log('loaded')
  }

  // window.addEventListener('resize', myEfficientFn);
  // window.addEventListener('load', loadedFn);


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

