import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getGeolocation } from '../../store/actions/geoActions';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './login.css';
import './loader.css';
import './video.css';
import './brand.css';

// import './brand.js';
import anime from 'animejs/lib/anime.es.js';


import video from './people.mp4';


class Splash extends Component {

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



    anime.timeline({
      loop: 10
    })
      .add({
        targets: '.ml5 .line',
        easing: "easeInOutExpo",
        duration: 700,
        opacity: [0.5, 1],
        scaleX: [0, 1]
      }, 500)
      .add({
        targets: '.ml5 .line',
        easing: "easeOutExpo",
        duration: 700,
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
      })
      .add({
        targets: '.ml5 .ampersand',
        easing: "easeOutExpo",
        duration: 700,
        opacity: [0, 1],
        scaleY: [0.5, 1]
      }, 1400)
      .add({
        targets: '.ml5 .letters-left',
        easing: "easeOutExpo",
        translateX: ["-0.5em", 0],
        duration: 1500,
        opacity: [0, 1]
      }, 2125)
      .add({
        targets: '.ml5 .letters-right',
        easing: "easeOutExpo",
        translateX: ["-0.5em", 0],
        duration: 1750,
        opacity: [0, 1]
      }, 2125)
      .add({
        targets: '.ml5 .line',
        opacity: 0,
        duration: 1750,
        easing: "easeOutExpo"
      }, 2125)
      .add({
        targets: '.tagline1',
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo"
      }, 2600)
      .add({
        targets: '.tagline2',
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo"
      }, 3350)
      .add({
        targets: '.tagline3',
        opacity: [0, 1],
        duration: 1500,
        easing: "easeOutExpo"
      }, 4100)
      .add({
        targets: '.loader, .spinner',
        opacity: [0, 1],
        duration: 2000,
        easing: "easeInOutExpo"
      }, 4100)
      .add({
        targets: '.ml5',
        opacity: 0,
        duration: 1500,
        easing: "easeOutExpo",
        delay: 3000
      }, 20000)
  }
  render() {

    setTimeout(() => {
      this.props.history.push('/main')
    }, 6250)

    return (
      // https://codesandbox.io/s/rzwrk2854

      <div
        id=""
        className=""
        style={{
          position: "fixed",
          bottom: "0",
          top: "0",
          left: "0",
          right: "0",
          // height: "calc(100vh - 50px)",
          overflow: "hidden",
          
          // height: "100%",
          // width: "100%",
          background: "yellow"
        }}
      >
          test
        {/* <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video> */}

        {/* <div className=""> */}
          {/* <div id="" className=""> */}
            his test
            {/* <h1 className="ml5">
              <span className="text-wrapper ">
                <span className="brand line line1 "></span>
                <span className="brand letters letters-left ">rest</span>
                <span className="brand letters ampersand ">☆</span>
                <span className="brand letters letters-right ">easy</span>
                <span className="brand line line2 "></span>
              </span>
            </h1> */}

            {/* <h1 className="ml5">
              <span className="text-wrapper ">
                <span className="tagline letters">
                  <span className="tagline tagline1 letters ">&nbsp;Your guide&nbsp;</span>
                  <span className="tagline tagline2 letters ">to all things&nbsp;</span>
                  <span className="tagline tagline3 letters ">fit to sit on&nbsp;</span>
                </span>
              </span>
            </h1> */}



            {/* <div className="loader"/> */}

          {/* </div> */}

        {/* </div> */}


      </div>

    )
  }
}

// export default Splash;

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => dispatch(getGeolocation())
  }
}

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Splash)
