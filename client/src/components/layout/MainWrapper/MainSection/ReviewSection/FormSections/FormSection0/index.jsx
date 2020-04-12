import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { formNext } from '../../../../../../../store/actions/formActions';
import HorizontalRule from '../../../../../../sharedComponents/general/HorizontalRule';

export class FormSection0 extends Component {

  nextStep = () => {
    console.log();
    this.props.formNext();
  }

  render() {

    return (

      <div id="revewSection" className="container-fluid  ai-c jc-c"
        style={{
          WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)"
        }}
      >

        <div className="row p-3 animated fadeIn"
          style={{
            borderRadius: "10px",
            maxHeight: "50%",
            maxWidth: "87.5%",
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            boxShadow: "0 0 5px #f5f5f5"
          }}
        >
          <div className="col ai-sa">

            <div className="row animated fadeIn fast">
              <div className="col jc-se ai-c">
                {/* <br /> */}
                <span
                  className=""
                  style={{
                    fontSize: "35px",
                    color: "whitesmoke",
                    textShadow: "0px 0px 5.5px #0abab5",
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >rest☆easy
                {/* 212529 */}
                </span>
                {/* <br /> */}
                {/* <span className="" style={{ fontSize: "17px" }}>Welcome to <span className="animated fadeIn slower">rest☆easy</span> </span> */}
                <span className=""
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    fontStyle: "italic",
                    color: "whitesmoke",
                    textShadow: "0px 0px 4.5px #0abab5",
                  }}
                >The world's best bathroom review app
                </span>
                {/* <br /> */}
                {/* <hr/> */}
                <HorizontalRule data_width="90%" />
              </div>
            </div>



            {/* <div className="row animated fadeIn slower">
              <div className="col jc-sa ai-c">

                <span className="" style={{ fontSize: "17px" }}>Welcome to <span className="animated fadeIn slower">rest☆easy</span> </span>
                <span className="" style={{ fontSize: "16px" }}>The world's best bathroom review app</span>
              </div>
            </div>
            <HorizontalRule /> */}
            <div className="row animated fadeIn fast ">
              <div className="col jc-sa ai-c">
                {/* <HorizontalRule /> */}
                <span style={{ fontSize: "17px", fontWeight: "bold" }}>Create a Review</span>
                {/* <br /> */}
                <span style={{ fontSize: "16px" }}>To create a review, press 'Begin review'.</span>

                <span style={{ fontSize: "16px" }}>Go for it, idiot.  Let the world know what you have to say about bathrooms.</span>
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
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormSection0);

    // https://unsplash.com/photos/I72dFJRFT3k
    // https://unsplash.com/photos/PMKd1Qg7jJ0
    // https://unsplash.com/photos/rb767e573nE
    // https://unsplash.com/photos/XatMS2NXIpo
    // https://unsplash.com/photos/xXc7zUKIhRw
    // https://unsplash.com/photos/qeIuFR5vPm8
    // https://unsplash.com/photos/d6LzDABxP6I
    // https://unsplash.com/photos/y14YOjamViI
    // https://unsplash.com/photos/FuQBKSIc2yM

    // https://unsplash.com/photos/SKoLSGLucN4

    // https://unsplash.com/photos/egqR_zUd4NI
    // https://unsplash.com/photos/yCzY0pnrhWo
    // https://unsplash.com/photos/FtUzIprTVtI
    // https://unsplash.com/photos/Mk_cIYHdC0w
    // https://unsplash.com/photos/PMKd1Qg7jJ0
    // https://unsplash.com/photos/nN1NUSsYreQ
    // https://pixabay.com/photos/toilet-grunge-bathroom-damaged-990206/
    // https://pixabay.com/photos/water-closet-toilet-wc-lavatory-1333454/
    // https://unsplash.com/photos/VijgJ4fIe8A
    // https://unsplash.com/photos/FRmsFpV4Fao
    // https://unsplash.com/photos/dSbfzDB2DiU
    // https://unsplash.com/photos/C4pTlSHaBsk
    // https://unsplash.com/photos/BiDGqzEoT3c
    // https://unsplash.com/photos/qmJVhLF9RLs
    // https://unsplash.com/photos/EF-QrtA8nkQ
    // https://unsplash.com/photos/TMlDhxsT3wE
    // https://unsplash.com/photos/1PBAMt4mF80
    // https://unsplash.com/photos/q7NBKl58K_U
    // https://unsplash.com/photos/MgnI7cUwkq8
// https://unsplash.com/photos/VCVI5QUvFAY 