import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// import { getGeolocation } from "../../store/actions/geoActions";

// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./login.css";
import "./loader.css";
import "./brand.css";
import "./reset.module.css";

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
    }, 7500)

    return (
      // https://codesandbox.io/s/rzwrk2854

      <div
        id="splashContainer"
        className="splashContainer animated fadeIn faster skip"
        style={{
          position: "fixed",

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
        <div
          className="splashBlur animated fadeIn slow"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, .2)",
            WebkitBackdropFilter: "blur(4.5px)",
            backdropFilter: "blur(4.5px)",
          }}
        />

        <video
          id="myVideo"
          className="animated fadeIn skip"
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
            className=" skip"
            src={video}
            type="video/mp4"
          />
        </video>


        <div className="skip"
          style={{
            position: "absolute",
            top: "25%",
            right: "0",
            left: "0",
          }}
        >

          <div className="skip">
            <h1 className="ml5 skip">
              <span className="text-wrapper skip">
                <span className="brand line line1 skip"></span>
                <span className="brand letters letters-left skip">rest</span>
                <span className="brand letters ampersand skip" style={{ margin: "0 12.5px 0 5px" }}>☆</span>
                <span className="brand letters letters-right skip" >easy</span>
                <span className="brand line line2 skip"></span>
              </span>
            </h1>

            <h1 className="ml5 skip">
              <span className="text-wrapper skip">
                <span className="tagline skip">
                  <span className="tagline tagline1 skip">&nbsp;Your guide&nbsp;</span>
                  <span className="tagline tagline2 skip">to all things&nbsp;</span>
                  <span className="tagline tagline3 skip">fit to sit on&nbsp;</span>
                </span>
              </span>
            </h1>

            <div className="loader skip" />

          </div>

        </div>


      </div>

    )
  }
}

// export default Splash;

const mapDispatchToProps = (dispatch) => {
  return {
    // getGeolocation: () => dispatch(getGeolocation())
  }
}

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Splash)
