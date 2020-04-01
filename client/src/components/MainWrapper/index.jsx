import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getGeolocation } from '../../store/actions/geoActions';

// import TopBar from './TopBar/';
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleApiWrapper } from "google-maps-react";
import { storeGoogleAPI } from '../../store/actions/googleAPIActions';

// import bootstrapGrid from './bootstrapGrid.module.css';
// import reset from './reset.module.css';
// import styles from './styles.module.css';
// import elements from './elements.module.css';


// import { statement } from '@babel/template';

class MainWrapper extends Component {

  state = {
    windowHeight: [],
    max_windowHeight: function () {
      return Math.max(...this.windowHeight);
    },
    min_windowHeight: function () {
      return Math.min(...this.windowHeight);
    }
  }

  componentDidMount() {
    this.props.storeGoogleAPI(this.props.google.maps);

    /* minified */
    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    }

    var myEfficientFn = debounce(() => {
      let vh = window.innerHeight;

      this.setState({
        windowHeight: [...this.state.windowHeight, vh]
      })

      document.documentElement.style.setProperty('--vh', `${this.state.windowHeight / 100}px`);
      // console.log("window height: ", this.state.windowHeight)
      // console.log("MAX - window height: ", this.state.max_windowHeight())
      // console.log("MIN - window height: ", this.state.min_windowHeight())

      // console.log("address bar height: ", this.state.max_windowHeight() - this.state.min_windowHeight());
    }, 750);

    var loadedFn = () => {
      myEfficientFn();
      // window.scrollTo(0, 1);

      console.log('loaded')
    }

    // window.addEventListener('resize', loadedFn);
    // window.addEventListener('load', myEfficientFn);

  }


  render() {

    const {
      mapListToggleValue,
      geolocationValue
    } = this.props;

    return (
      <div id="MainWrapper" className="container-fluid animated fadeIn">

        <div
          className="row"
          style={{
            position: "fixed",
            top: "0",
            height: "calc(100% - 55px)",
          }}
        >
          <div className="col">
            < MainSection />
          </div>
        </div>

        <div
          className="row"
          style={{
            position: "fixed",
            bottom: "0",
            height: "55px",
            // borderTop: "1px solid #DCDCDC",
            borderStyle: "inset"
          }}
        >
          <div id="testBottomBar" className="col bg-primary">
            < BottomBar />
          </div>
        </div >

      </div>
    )

  }
}


// export default MainWrapper;


const mapStateToProps = (state) => {
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    boundsValue: state.boundsState.boundsValue,
    googleAPIValue: state.googleAPIState.googleAPIValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeGoogleAPI: api => dispatch(storeGoogleAPI(api))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ]),
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GM_KEY,
    version: "3.30"
  })
)(MainWrapper);
