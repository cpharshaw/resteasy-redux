import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import FormSection0 from './FormSections/FormSection0';
import FormSection1 from './FormSections/FormSection1';
import FormSection2 from './FormSections/FormSection2';
import FormSection3 from './FormSections/FormSection3';
import FormSection4 from './FormSections/FormSection4';
import FormSection5 from './FormSections/FormSection5';

import HorizontalRule from '../../../../sharedComponents/general/HorizontalRule';
import FormNav from './FormNav';

import { locationChosen } from '../../../../../store/actions/formActions';
import { modalClosed } from '../../../../../store/actions/modalActions';

// import ReviewConfirm from './FormSections/FormSections6'; 


export class ReviewSection extends Component {

  placeSelected = e => {
    const name = e.currentTarget.getAttribute('data_placename');
    const category = e.currentTarget.getAttribute('data_placecategory');
    const distance = e.currentTarget.getAttribute('data_placedistance');
    const address = e.currentTarget.getAttribute('data_placeaddress');

    const placeObj = {
      name,
      category,
      distance,
      address
    }
    // console.log("place selected: ", placeObj)
    this.props.locationChosen(placeObj);
    this.props.modalClosed();
  }

  handleChange = (e, otherData) => {

    const target = e.target;
    const name = target.name;

    const files = target.files;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    if (name === "admission") this.setState({ feeDisplay: otherData });
    // if (name === "admission") console.log("test log: ", name, value, target.value, otherData);
    // if (name !== "admission") console.log("test log: ", name, value, target.value);

    if (otherData && otherData[0] === "delete") {
      this.setState({
        imgElementArr: otherData[1]
      });
    }

    if (otherData && otherData[0] === "add") {
      this.setState({
        imgElementArr: [...this.state.imgElementArr, ...otherData[1]]
      });
    }



  };


  render() {


    // console.log('all props from review section: ', this.props)

    const {
      selectedSectionValue,
      formStepValue,
    } = this.props;

    const displayValue = selectedSectionValue === "review" ? "flex" : "none";


    // console.log(this.props)

    const foursquarePlaces = this.props.foursquareValue !== null && this.props.foursquareValue !== undefined ?
      this.props.foursquareValue.map((place, i) => {
        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].shortName : "") : null;
        const address = place.location.address + ", " + place.location.city + ", " + place.location.state;
        const distance = place.distance + " ft";
        return (
          <div
            id=""
            key={i + "fs"}
            className=""
            style={{
              flexDirection: "column",
            }}
            data_placedata={JSON.stringify(place)}
            onClick={e => this.placeSelected(e)}
            data_placename={name}
            data_placeaddress={address}
            data_placecategory={category}
            data_placedistance={distance}
          >
            <span><b>{name}</b> ({distance}) </span>
            <span>{address} </span>
            <span>{category} </span>
            <HorizontalRule />
          </div>
        )
      }) : null;

    // backgroundImage: "url('https://images.unsplash.com/photo-1569122243657-3c1c51340f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80')",
    {/* https://codeburst.io/modals-in-react-f6c3ff9f4701 */ }
    return (

      <div id="FormSections" className="container-fluid animated fadeIn fast"
        style={{
          display: displayValue,
          backgroundImage: formStepValue === 0 ? "url('https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')" : null,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto 100%",
        }}
      >

        <div className="row-100 jc-sb ac-sb"
          style={{
            // backdropFilter: "blur(3.75px) grayscale(0.8) sepia(0.1) contrast(0.8)",
            // WebkitBackdropFilter: "blur(3.75px) grayscale(0.8) sepia(0.1) contrast(0.8)"
          }}
        >
          <div className="col">

            <div className="row"
              style={{
                height: "calc(100% - 70px)",
                padding: "8px 2px 2px 2px"
              }}
            >
              <div className="col">
                {/* {formStepValue === 0 || formStepValue === 1 ? < FormSection1 /> : null} */}
                {formStepValue === 0 ? < FormSection0 /> : null}
                {formStepValue === 1 ? < FormSection1 /> : null}
                {formStepValue === 2 ? < FormSection2 /> : null}
                {/* {formStepValue === 3 ? < FormSection3 /> : null} */}
                {/* {formStepValue === 4 ? < FormSection4 /> : null} */}
                {/* {formStepValue === 5 || formStepValue === 6 || formStepValue === 7 ? < FormSection5 /> : null} */}
              </div>
            </div>

            <div className="row"
              style={{
                height: "70px",
                // background: "transparent"
              }}
            >

              <div className="col">
                < FormNav />
              </div>

            </div>




          </div >
        </div >
      </div >

    )
  }

}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formStepValue: state.formState.formStepValue,
    modalState: state.modalState,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    // reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
    selectedSectionValue: ownProps.display,
    foursquareValue: state.foursquareState.foursquareValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);