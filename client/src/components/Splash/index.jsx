import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getGeolocation } from "../../store/actions/geoActions";

// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./login.css";
import "./loader.css";
import "./brand.css";

// import "./brand.js";
import anime from "animejs/lib/anime.es.js";


import video from "./people.mp4";


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

    // https://tobiasahlin.com/moving-letters/
    let ml = { timelines: {} };

    ml.timelines["ml5"] = anime.timeline({ loop: false })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 800,
        delay: 1000
      })
      .add({
        targets: '.ml5 .line',
        translateY: function (e, i, l) {
          var offset = -0.625 + 0.625 * 2 * i;
          return offset + "em";
        },        
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      }, '-=550')
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        translateX: ["0.5em", 0],
      }, '-=300')
      .add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=600')
      .add({
        targets: ".ml5 .line",
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo"
      })
      .add({
        targets: ".tagline1",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo"
      }, 3000)
      .add({
        targets: ".tagline2",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo"
      }, 4000)
      .add({
        targets: ".tagline3",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo"
      }, 5000)
      .add({
        targets: ".loader, .spinner",
        opacity: [0, 1],
        duration: 5000,
        easing: "easeInOutExpo"
      }, '-=3000')
      // .add({
      //   targets: ".ml5",
      //   opacity: 0,
      //   duration: 1000,
      //   easing: "easeOutExpo",
      //   delay: 1000
      // })
  }
  render() {

    setTimeout(() => {
      this.props.history.push("/main")
    }, 7250)

    return (
      // https://codesandbox.io/s/rzwrk2854

      <div
        id="splashContainer"
        className="rs animated fadeIn faster"
        style={{
          position: "fixed",
          background: "lightgrey",
          top: "50%",
          right: "0",
          bottom: "0",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          MSTransform: "translateX(-50%) translateY(-50%)",
          MozTransform: "translateX(-50%) translateY(-50%)",
          WebkitTransform: "translateX(-50%) translateY(-50%)",
          transform: "translateX(-50%) translateY(-50%)",
          /* z-index: -100; */
          /* filter: blur(1.5px); */
        }}
      >

        <video
          id="myVideo"
          className="animated fadeIn"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            MSTransform: "translateX(-50%) translateY(-50%)",
            MozTransform: "translateX(-50%) translateY(-50%)",
            WebkitTransform: "translateX(-50%) translateY(-50%)",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: "-100",
          }}
          autoPlay
          muted
          loop
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>


        <div className="">
          <div id="" className="">
            <h1 className="ml5">
              <span className="text-wrapper ">
                <span className="brand line line1 "></span>
                <span className="brand letters letters-left">rest</span>
                <span className="brand letters ampersand" style={{fontSize: "60px", margin: "0 12.5px 0 5px"}}>☆</span>
                <span className="brand letters letters-right" >easy</span>
                <span className="brand line line2 "></span>
              </span>
            </h1>

            <h1 className="ml5">
              <span className="text-wrapper ">
                <span className="tagline ">
                  <span className="tagline tagline1  ">&nbsp;Your guide&nbsp;</span>
                  <span className="tagline tagline2  ">to all things&nbsp;</span>
                  <span className="tagline tagline3  ">fit to sit on&nbsp;</span>
                </span>
              </span>
            </h1>



            <div className="loader" />

          </div>

        </div>


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
