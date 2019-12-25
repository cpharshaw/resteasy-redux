
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Splash from './components/Splash/';
import MainWrapper from './components/MainWrapper/';
// import MainMap from './components/MainMap/';
// import MainList from './components/MainList/';
// import Filters from './components/Filters/';


// import ContactUs from './components/ContactUs/';
// import About from './components/About/';


// import './components/Splash/brand.js';


// import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/splash" component={Splash} />
          
          <Route exact path="/main" component={MainWrapper} />

          {/* <Route path="/filters" component={Filters} /> */}

          {/* <Route path="userDetails/:id" component={UserDetails} /> */}
          
          {/* <Route exact path="/add" component={ReviewWrapper} />
          <Route exact path="/create" component={ReviewWrapper} />
          <Route path="/review/:id" component={ReviewDetails} />           */}

          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route path="/contact" component={ContactUs} /> */}
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
