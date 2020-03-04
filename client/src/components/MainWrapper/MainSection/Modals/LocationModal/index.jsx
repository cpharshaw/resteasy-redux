import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formPrev } from '../../../../../store/actions/formActions';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { storeCircle } from '../../../../../store/actions/circleActions';
// import ModalBlurBackground from '../ModalBlurBackground';

export class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.searchBoxRef = React.createRef();
    this.searchBox = null;
    this.state = {
      place: null,
      value: ""
    }
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value
    })
  }

  clearInput = () => {
    // console.log(this.state.place);
    this.setState({
      place: null,
      value: ""
    });
    console.log("cleared input pressed", this.state);
  }

  componentDidMount() {

    const circle = new this.props.google.maps.Circle(
      {
        center: {
          lat: this.props.geolocationLatValue,
          lng: this.props.geolocationLngValue
        },
        radius: 56000
      }
    );


    const bounds = circle.getBounds();

    const options = {
      bounds: bounds,
      // strictBounds: true,
      // types: ['establishment']
    };

    this.searchBox = new this.props.google.maps.places.Autocomplete(
      this.searchBoxRef.current,
      options
    );


    this.searchBox.addListener(
      'place_changed',
      () => {
        console.log(this.searchBox)
        const place = this.searchBox.getPlace();
        this.setState({
          place,
          value: place.name
        });
        console.log("place: ", place)
      }
    );

    this.searchBox.addListener(
      'idle',
      () => {
        const place = this.searchBox.getPlace();
        this.setState({
          place
        });
        console.log("place: ", this.state.place)
      }
    );

    this.props.storeCircle(circle);

  }


  componentDidUpdate(prevProps, prevState, snapshot) {

    // variables
    const numGeoUpdates = this.props.numGeolocationUpdates;
    const prev_numGeoUpdates = prevProps.numGeolocationUpdates;

    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;
    const prev_geoLat = prevProps.geolocationLatValue;
    const prev_geoLng = prevProps.geolocationLngValue;

    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const prev_ctrLat = prevProps.centerLatValue;
    const prev_ctrLng = prevProps.centerLngValue;

    const bounds = this.props.boundsValue;
    const prev_bounds = prevProps.boundsValue;

    const inputVal = this.props.inputValue;
    const prev_inputVal = prevProps.inputValue;

    // console.log("numGeoUpdates: ", numGeoUpdates);

    // checks for changes
    const geo_update =
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng;

    const numGeo_update = numGeoUpdates !== prev_numGeoUpdates;

    const ctr_update =
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng;

    const bounds_update = JSON.stringify(bounds) !== JSON.stringify(prev_bounds);

    const input_update = inputVal !== prev_inputVal;

    const geo_same_ctr =
      this.props.geolocationLatValue !== this.props.centerLatValue
      ||
      this.props.geolocationLngValue !== this.props.centerLngValue;

    // 
    // 



    if (geo_update || numGeo_update) {

      const circle = new this.props.google.maps.Circle(
        {
          center: {
            lat: geoLat,
            lng: geoLng
          },
          radius: 56000
        }
      );

      this.props.storeCircle(circle);

      const circleBounds = circle.getBounds();

      this.searchBox.setBounds(
        circleBounds
      );

      // console.log("searchBox bounds set to circle around geolocation", geoLat, geoLng);

    }


    if (ctr_update) {

      const circle = new this.props.google.maps.Circle(
        {
          center: {
            lat: ctrLat,
            lng: ctrLng
          },
          radius: 56000
        }
      );
      this.props.storeCircle(circle);

      const circleBounds = circle.getBounds();

      this.searchBox.setBounds(
        circleBounds
      );

      // console.log("searchBox bounds set to circle around center", ctrLat, ctrLng);

    }



  }

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalClosed();

  }

  render() {

    const {
      children,
      data_size,
      data_name
    } = this.props;

    const style = {
      position: 'absolute',
      top: "72px",
      left: "0",
      right: "0",
      // width: "85%",
      height: "50px",
      flexDirection: "row",
      boxShadow: "0 1px 3px #a8a8a8",
      // borderRadius: "5px",
      // background: "#f5f5f5",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingLeft: "9px",
      paddingRight: "9px",
      // borderRight: "1px solid #f5f5f5",
      // overflowY: "auto",
      // justifyContent: "flex-start",
      // alignContent: "flex-start",
      background: "#0abab5"
    }


    return (

      <div
        id=""
        className="rs animated flipInX faster"
        style={style}
      >

        <input
          id="pac-input"
          className="rs"
          type="search"
          ref={this.searchBoxRef}
          // value={this.state.value}
          // onChange={e => this.handleChange(e)}
          placeholder="Recenter around location..."
          style={{
            all: "unset",
            height: "30px",
            width: "90%",
            fontStyle: "italic",
            padding: "7px",
            fontSize: "12.5px",
            background: "#f5f5f5",
            textOverflow: "ellipsis",
          }}
        />
        {/* {
          this.state.value !== "" ?
            <span
              id=""
              className="rs"
              onClick={this.clearInput}
              style={{
                position: "absolute",
                width: "10px",
                height: "42px",
                right: "47.5px",
                color: "darkgrey",
                background: "transparent",
                backgroundColor: "transparent",
                fontSize: "25px"
              }}
            >
              &times;
            </span> 
            : null
        } */}
        <div
          className="rs"
          style={{
            width: "10%",
            background: "#f5f5f5",
          }}
        >
          <img src="https://img.icons8.com/material-outlined/20/000000/location-update.png" />
        </div>
      </div >

    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    formStepValue: state.formState.formStepValue,
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    modalClosed: () => dispatch(modalClosed()),
    storeCircle: (circle) => dispatch(storeCircle(circle))
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
)(LocationModal);

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps)
// )(LocationModal);