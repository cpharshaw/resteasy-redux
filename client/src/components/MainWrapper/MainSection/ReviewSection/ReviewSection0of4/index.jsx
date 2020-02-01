import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';


export class ReviewSection0of4 extends Component {

  nextStep = () => {
    console.log();
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = () => {
    console.log();
    this.props.formPrev();
  }


  render() {


    return (
      < div className="rs" style={{ flexDirection: "column" }}>
        <button
          onClick={this.nextStep}
          className="rs button bg-primary text-white"
        >
          <em>Begin review</em>
        </button>
      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection0of4);