
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


import { compose } from 'redux';
import { connect } from 'react-redux';
import { getGeolocation } from '../../store/actions/geoActions';

import './recenter.css';



class RecenterButton extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      color: "grey"
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.getGeolocation();
    console.log('recenter clicked');
  }    



  componentDidMount() {

    if (
      this.props.geolocationLatValue && this.props.centerLatValue
      &&
      (
        this.props.geolocationLatValue === this.props.centerLatValue
        &&
        this.props.geolocationLngValue === this.props.centerLngValue
      )
    ) {
      this.setState({
        color: "#44aacc"
      });
    }

    if (
      this.props.geolocationLatValue && this.props.centerLatValue
      &&
      (
        this.props.geolocationLatValue !== this.props.centerLatValue
        ||
        this.props.geolocationLngValue !== this.props.centerLngValue
      )
    ) {
      this.setState({
        color: "grey"
      });
    }

  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    if (
      (
        this.props.geolocationLatValue && this.props.centerLatValue
          &&
        (
          this.props.geolocationLatValue !== prevProps.geolocationLatValue
          ||
          this.props.geolocationLngValue !== prevProps.geolocationLngValue
          ||
          this.props.centerLatValue !== prevProps.centerLatValue
          ||
          this.props.centerLngValue !== prevProps.centerLngValue
        )
          &&
        (
          this.props.geolocationLatValue === this.props.centerLatValue
            &&
          this.props.geolocationLngValue === this.props.centerLngValue
        )
      )
    ) {
      this.setState({
        color: "#44aacc"
      });
      console.log("update true")
    }

    if (
      (
        this.props.geolocationLatValue && this.props.centerLatValue
          &&
        (
          this.props.geolocationLatValue !== prevProps.geolocationLatValue
          ||
          this.props.geolocationLngValue !== prevProps.geolocationLngValue
          ||
          this.props.centerLatValue !== prevProps.centerLatValue
          ||
          this.props.centerLngValue !== prevProps.centerLngValue
        )
          &&
        (
          this.props.geolocationLatValue !== this.props.centerLatValue
            ||
          this.props.geolocationLngValue !== this.props.centerLngValue
        )
      )
    ) {
      this.setState({
        color: "grey"
      });
      console.log("update false")
    }

  }


  render() {

 
    return (

      <div className="recenterButton"
        style={
          {
            borderColor: this.state.color
          }
        }
        onClick={this.handleClick}
      >
        <div className="recenterCrosshairs1"
          style={
            {
              background: this.state.color
            }
          }
        />
        <div className="recenterButtonRing"
          style={
            {
              borderColor: this.state.color
            }
          }
        >
          <div className="recenterButtonDot"
            style={
              {
                background: this.state.color
              }
            }
          />
        </div>
        <div className="recenterCrosshairs2"
          style={
            {
              background: this.state.color
            }
          }
        />
      </div>

    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    // displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: (state.geolocationState.geolocationLatValue),
    geolocationLngValue: (state.geolocationState.geolocationLngValue),
    // mapValue: state.mapState.mapValue,
    // boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    // ,state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => dispatch(getGeolocation())
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
    apiKey: "AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw",
    version: "3.30"
  })
)(RecenterButton);