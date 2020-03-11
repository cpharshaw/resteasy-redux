import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formPrev } from '../../../../../store/actions/formActions';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { storeCircle } from '../../../../../store/actions/circleActions';
import { storeCenter } from '../../../../../store/actions/centerActions';
import { getPlacesFromFoursquare } from '../../../../../store/actions/foursquareActions';
// import ModalBlurBackground from '../ModalBlurBackground';

export class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.searchBoxRef = React.createRef();
    this.searchBox = null;
    this.searchBoxTest = null;
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
    // console.log("cleared input pressed", this.state);
  }

  componentDidMount() {

    const circle = new this.props.googleAPIValue.Circle(
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

    this.searchBox = new this.props.googleAPIValue.places.Autocomplete(
      this.searchBoxRef.current,
      options
    );


    this.searchBox.addListener(
      'place_changed',
      () => {
        // console.log(this.searchBox)
        const place = this.searchBox.getPlace();
        this.setState({
          place,
          value: place.name
        });
        // console.log("place: ", place)

        const ctrLat = place.geometry.location.lat();
        const ctrLng = place.geometry.location.lng();

        const center = {
          lat: ctrLat,
          lng: ctrLng
        };

        const fsLL = ctrLat + "," + ctrLng;
        this.props.getPlacesFromFoursquare(fsLL);

        // setTimeout(() => console.log("fs value updated: ", this.props.foursquareValue), 2000)
        // console.log("fs value updated: ", this.props.foursquareValue);

        this.props.storeCenter(center);

      }
    );

    this.searchBox.addListener(
      'idle',
      () => {
        const place = this.searchBox.getPlace();
        this.setState({
          place
        });
        // console.log("place: ", this.state.place)
      }
    );

    // this.props.storeCircle(circle);

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

      const circle = new this.props.googleAPIValue.Circle(
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

      const circle = new this.props.googleAPIValue.Circle(
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
      data_name,
      data_width,
      data_height,
      data_margin,
      data_position,
      data_top,
      data_bottom,
      data_left,
      data_right,
      data_border
    } = this.props;

    // console.log(data_position)
    return (

        <input
          id="pac-input"
          className="rs"
          type="search"
          ref={this.searchBoxRef}
          placeholder="Recenter around location..."
          style={{
            // all: "unset",
            position: data_position ? data_position : null,
            top: data_top ? data_top : null ,
            bottom: data_bottom ? data_bottom : null,
            left: data_left ? data_left : null,
            right: data_right ? data_right : null,
            height: data_height ? data_height : "44px !important",
            width: data_width ? data_width : null,
            margin: data_margin ? data_margin : null,
            fontStyle: "italic",
            padding: "7px !important",
            fontSize: "12.5px",
            background: "#f5f5f5",
            border: data_border ? data_border : null,
            textOverflow: "ellipsis",
            zIndex: "1100 !important"
          }}
        /> 
  
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
    centerLngValue: state.centerState.centerLngValue,
    foursquareValue: state.foursquareState.foursquareValue,
    googleAPIValue: state.googleAPIState.googleAPIValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    modalClosed: () => dispatch(modalClosed()),
    storeCircle: (circle) => dispatch(storeCircle(circle)),
    storeCenter: (center) => {
      return dispatch(storeCenter(center));
    },
    getPlacesFromFoursquare: (location) => {
      return dispatch(getPlacesFromFoursquare(location))
    },
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
)(LocationModal);
