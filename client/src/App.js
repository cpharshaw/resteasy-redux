import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash/';
import MainWrapper from './components/MainWrapper/';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/splash" component={Splash} />
          <Route exact path="/main" component={MainWrapper} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth
// })(App);
