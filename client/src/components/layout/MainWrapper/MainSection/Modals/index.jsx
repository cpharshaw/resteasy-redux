import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import { formNext, formPrev, resetForm } from '../../../../../store/actions/formActions';
import { signIn } from '../../../../../store/actions/authActions';
import { selectSection } from '../../../../../store/actions/sectionActions';
import { locationChosen } from '../../../../../store/actions/formActions';
import FormNavButton from '../../../../sharedComponents/formComponents/FormNavButton';
import HorizontalRule from '../../../../sharedComponents/general/HorizontalRule';
import ModalFormReset from './ModalFormReset';
import LocationModal from './ModalFormLocationSelector';
import signIn_normal from '../MyStuffSection/btn_google_signin_light_normal_web.png';
import signIn_focus from '../MyStuffSection/btn_google_signin_light_focus_web.png';
import signIn_pressed from '../MyStuffSection/btn_google_signin_light_pressed_web.png';


export class ModalContainer extends Component {

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    if (this.props.formStepValue === 7) {
      this.props.resetForm();
      this.props.selectSection("mapList");
    }

    this.props.modalClosed()

  }


  placeSelected = (e, place) => {
    e.preventDefault();
    // console.log("place test: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      address,
      category,
      distance,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();

  }


  addReviewClicked = (e, place) => {
    e.preventDefault();
    // console.log("place: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      category,
      distance,
      address,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();
    if (place) this.props.formNext("addReviewStep1");
    if (place) this.props.selectSection("review");

  }

  favoriteClicked = (e, place) => {
    e.preventDefault();
    // console.log("place: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      category,
      distance,
      address,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();
    if (place) this.props.formNext("addReviewStep1");
    if (place) this.props.selectSection("review");

  }



  signInClicked = e => {
    e.preventDefault();
    // e.currentTarget.src = signIn_pressed;
    console.log("auth status: ", this.props.loginCredentialValue)
    this.props.signIn();
  }

  signInDown = e => {
    e.preventDefault();
    console.log("mouse down")
    e.currentTarget.src = signIn_pressed;
    // this.props.signIn();
  }
  signInUp = e => {
    e.preventDefault();
    console.log("mouse up")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseOut = e => {
    e.preventDefault();
    console.log("mouse out")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseLeave = e => {
    e.preventDefault();
    console.log("mouse leave")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInFocus = e => {
    e.preventDefault();
    console.log("mouse focus")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }
  signInBlur = e => {
    e.preventDefault();
    console.log("mouse blur")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }

  signInTouchStart = e => {
    e.preventDefault();
    console.log("touch start");
    e.currentTarget.src = signIn_pressed;
    this.props.signIn();
  }

  signInTouchEnd = e => {
    e.preventDefault();
    console.log("touch end");
    e.currentTarget.src = signIn_normal;
  }

  signInTouchCancel = e => {
    e.preventDefault();
    console.log("touch cancel");
    e.currentTarget.src = signIn_normal;
  }

  signOutClicked = e => {
    this.props.signOut();
    // console.log("sign out clicked")
  }




  componentDidUpdate(prevProps, prevState, snapshot) {
    // const prevFSVal = prevProps.foursquareValue;
    // const currFSVal = this.props.foursquareValue;
    // const fsCheck = prevFSVal !== currFSVal && currFSVal;

    // if (fsCheck) {




    // }

  }



  render() {

    const {
      selectedSectionValue,
      formStepValue,
      formProcessingValue,
      currentModal,
      data_size,
      children,
      foursquareValue,
      selectedMarkerValue,
      selectedPlaceValue,
      formRestroomTypeValue,
      loginCredentialValue
    } = this.props;

    // console.log("loginCredentialValue in render before return: ", loginCredentialValue)



    const foursquarePlaces = !foursquareValue ? null : (

      foursquareValue.map((place, i) => {

        // console.log("fsPlace - " + i + " - ", place);

        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].name : "") : null;
        const address = place.location.address;
        const distance = place.distance + " ft";

        const id = place.id;
        const city = place.location.city;
        const stateCode = place.location.state;
        const zip = place.location.postalCode;
        const country = place.location.country;


        // const signInButtonComponent = () => {
        //   return (
        //     <div className="row">
        //     </div>
        //     )
        // }

        return (
          <div className="row" key={i + "fs"}>
            <div
              className="col jc-se ai-c"
              data_placedata={JSON.stringify(place)}
              onClick={e => this.placeSelected(e, place)}
              data_placename={name}
              data_placeaddress={address}
              data_placecategory={category}
              data_placedistance={distance}

              data_placeid={id}
              data_placecity={city}
              data_placestatecode={stateCode}
              data_placezip={zip}
              data_placecountry={country}

              style={{
                flexWrap: "wrap",
                whiteSpace: "wrap",
              }}
            >
              <span className=""><b>{name}</b> ({distance}) </span>
              <span className="">{address} </span>
              <span className="">{category} </span>
              {i !== (foursquareValue.length - 1) ? <HorizontalRule /> : null}

            </div>
          </div>
        )
      })
    )

    return (
      <React.Fragment>
        {
          currentModal === "settingsModal" ? null : (

            <section
              id="modalContainer"
              className="animated fadeIn faster col ai-c"
              style={{
                position: "absolute",
                // top: selectedSectionValue === "mapList" ? "92.5px" : "0",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(197,197,197,0.55)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                zIndex: "1000",
                color: "inherit"
              }}
            >

              <div className="row animated fadeIn ac-fs"
                style={{
                  maxHeight: (
                    currentModal === "formLocationModal" ? "87.5%" :
                      currentModal === "placeModal" ? "97.5%" :
                        currentModal || formStepValue === 6 || formStepValue === 7 ? "27.5%" :
                          "50%"
                  ),
                  maxWidth: (
                    currentModal === "formLocationModal" ? "92.5%" :
                      currentModal === "placeModal" ? "95%" :
                        currentModal || formStepValue === 6 || formStepValue === 7 ? "70%" :
                          "50%"
                  ),
                  background: "#f5f5f5",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px #a8a8a8",
                }}
              >




                <div className="col jc-fs ac-fs ai-s "
                  style={{
                    // background: "#f5f5f5",
                    // borderRadius: "5px",
                    // boxShadow: "0 0 3px #a8a8a8",
                  }}
                >

                  <div className="row animated fadeIn slow ac-fe "
                    style={{
                      minHeight: "40px",
                      maxHeight: "40px",
                    }}
                  >
                    <div className="col ai-fe"
                      style={{
                        pointerEvents: "all",
                        zIndex: "1000",
                      }}
                    >
                      <span className="mx-2 skip" onClick={e => this.closeModal(e)}
                        style={{
                          pointerEvents: "all",
                          fontSize: "2.5em",
                          fontWeight: "500",
                          color: "grey",
                          zIndex: '1000',
                          marginTop: ""
                        }}
                      >
                        {formStepValue !== 7 ? "×" : null}
                      </span>
                    </div>
                  </div>





                  {
                    currentModal === "placeModal" ? (

                      <div className="row " style={{ pointerEvents: "all" }}>
                        <div className="col fc jc-fs"
                          style={{ border: "1px solid whitesmoke" }}
                        >

                          <div className="row ">
                            <div className="col-2 ai-c">
                              <div className="row">
                                <div className="col ai-c">
                                  {selectedPlaceValue ? <img src={selectedMarkerValue.icon} className="mx-2" height="50" width="50" /> : ":("}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col ai-c">
                                  <p style={{ fontStyle: "italic", fontSize: "16px" }}><b>4.6</b></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <span>{selectedPlaceValue ? selectedPlaceValue.name : "sad face :("}</span>
                              <span>{selectedPlaceValue ? selectedPlaceValue.location.address : "your house"}</span>
                            </div>
                            <div className="col-2 ai-c">
                              <p>
                                <span style={{ fontSize: "12px" }}>(</span><span style={{ fontSize: "11px", fontStyle: "italic" }}>{formRestroomTypeValue ? " Men's " : formRestroomTypeValue}</span><span style={{ fontSize: "12px" }}>)</span>
                              </p>
                            </div>
                          </div>

                          <HorizontalRule data_width="90%" />


                          <div className="row my-1 jc-se">
                            <div className="col">
                              <img src="https://img.icons8.com/ios-glyphs/18/d3d3d3/sporty-wheelchair-user.png" />
                            </div>
                            <div className="col">
                              <img src="https://img.icons8.com/ios-glyphs/18/000000/gender-neutral-washroom.png" />
                            </div>
                            <div className="col">
                              <img src="https://img.icons8.com/ios-glyphs/18/000000/baby.png" />
                            </div>
                            <div className="col">
                              <img src="https://img.icons8.com/ios-glyphs/18/d3d3d3/housekeeper-female.png" />
                            </div>
                            <div className="col">
                              <img src="https://img.icons8.com/ios-glyphs/18/000000/cheap-2-1.png" />
                              {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/create-order.png"/> */}
                            </div>
                          </div>

                          <HorizontalRule data_width="45%" />

                          <div className="row-f-1 ">
                            <div className="col fc jc-fs">

                              <div className="row jc-se my-1">
                                {/* <div className="col-1"></div> */}
                                <div className="col">
                                  <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Clean</div>
                                  <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>4.7</div>
                                </div>
                                <div className="col">
                                  <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Privacy</div>
                                  <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>4.5</div>
                                </div>
                                <div className="col">
                                  <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Safety</div>
                                  <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>5</div>
                                </div>
                                <div className="col">
                                  <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Comfort</div>
                                  <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>4.5</div>
                                </div>
                                <div className="col">
                                  <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Style</div>
                                  <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>3</div>
                                </div>
                                {/* <div className="col-1"></div> */}
                              </div>

                              {/* <HorizontalRule data_width="60%" /> */}


                              <div className="row js-fg my-1"
                              // style={{border: "1px solid red"}}
                              >
                                <div className="col">


                                  <div className="row ai-fs"
                                    style={{
                                      height: "15px",
                                      // height: "calc(100% - (205px))",
                                      WebkitOverflowScrolling: "touch",
                                      overflowY: "scroll",
                                      msOverflowY: "scroll",
                                      overflowX: "hidden",
                                      msOverflowX: "hidden",
                                      // border: "1px solid red"
                                    }}
                                  >
                                    <div
                                      id="commentsScroller"
                                      className="col jc-fs pt-1 "
                                      style={{
                                        overflowX: "hidden",
                                        msOverflowX: "hidden",
                                        overflowY: "hidden",
                                        msOverflowY: "hidden",
                                        backgroundColor: "#E0E0E0"
                                      }}
                                    >
                                      {/* {foursquarePlaces} */}

                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              <img src="https://via.placeholder.com/150x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                            <div className="col">
                                              <img src="https://via.placeholder.com/150" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>

                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              {/* <img src="https://via.placeholder.com/160" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} /> */}
                                            </div>
                                            <div className="col">
                                              {/* <img src="https://via.placeholder.com/160x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} /> */}
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>

                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>


                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>


                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>


                                      <div className="row js-fg mb-1">
                                        <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                             <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                            </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                              <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                              <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                          <div className="row mt-2 mb-2">
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                            <div className="col">
                                              <img src="https://via.placeholder.com/175x195" style={{ maxWidth: "calc(50vw - 20px)", maxHeight: "225px" }} />
                                            </div>
                                          </div>
                                          {/* <HorizontalRule data_width="45%" /> */}
                                        </div>
                                      </div>


                                      {/* <div className="row js-fg">
                                        <div className="col fc jc-fs ai-fs mx-2">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                        <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                      </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                        <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                        <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                        </div>
                                      </div>

                                      <div className="row js-fg">
                                        <div className="col fc jc-fs ai-fs mx-2">
                                          <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>
                                            &nbsp;
                                        <span style={{ fontSize: "12px", fontStyle: "italic" }}> 4.5</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span style={{ fontSize: "9px", color: "grey" }}>22hrs </span>
                                            &nbsp;
                                      </p>
                                          <p className="ta-l mt-1">
                                            <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                            &nbsp;
                                        <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also like bathrooms.  Speaking of which...  This is a test.  I like pizza, but I also endXXX cccccc</span>
                                            &nbsp;
                                        <span style={{ fontSize: "19px", fontStyle: "italic" }}>"</span>
                                          </p>
                                        </div>
                                      </div> */}


                                    </div>
                                  </div>
                                </div>
                              </div>


                            </div>
                          </div>

                          <div className="row mb-2" >
                            <div className="col-2"></div>
                            <div className="col-8" onClick={e => this.addReviewClicked(e, selectedPlaceValue)}>

                              {/* if reviewed already, "Edit Review" intead */}
                              <p><span style={{ fontSize: "14px", fontStyle: "italic", color: "#0abab5" }}>Add Review</span></p>
                            </div>
                            <div className="col-2 jc-c ai-c ac-c">
                            {/* <div className="col-2 jc-c ai-c ac-c" onClick={e => this.favoriteClicked(e, selectedPlaceValue)}> */}
                              {/* <img src="https://img.icons8.com/material-outlined/21/383838/bookmark-ribbon--v1.png" /> */}
                              {/* <img src="https://img.icons8.com/material-two-tone/21/000000/bookmark-ribbon--v1.png"/> */}
                            </div>
                          </div>

                          {/* data_placecategory={selectedPlaceValue.categories[0] ? selectedPlaceValue.categories[0].name : null}
                          data_placedistance={selectedPlaceValue.distance}

                          data_placemarker={selectedMarkerValue.icon}
                          data_placenumreviews={14}

                          data_userreviewed={true}
                          data_userbookmarked={true} */}
                        </div>
                      </div>

                    ) : null
                  }





                  {
                    currentModal === "formLocationModal" ? (

                      this.props.foursquareValue === null ? <div className="fsLoader" /> : (
                        <React.Fragment>

                          <div className="row mt-1 "
                            style={{
                              minHeight: "45px",
                              maxHeight: "45px"
                            }}
                          >
                            <div className="col mx-3 ">
                              <LocationModal
                                data_border="0.5px solid #0abab5"
                                data_classname="skip"
                              />
                            </div>
                          </div>

                          <div className="row ai-fs my-2"
                            style={{
                              height: "calc(100% - (35px + 45px))",
                              // height: "calc(100% - (35px + 45px))",
                              WebkitOverflowScrolling: "touch",
                              overflowY: "scroll",
                              msOverflowY: "scroll",
                              overflowX: "hidden",
                              msOverflowX: "hidden",
                            }}
                          >
                            <div
                              id="fsReviewScroller"
                              className="col jc-fs pt-1"
                              style={{
                                overflowX: "hidden",
                                msOverflowX: "hidden",
                                overflowY: "hidden",
                                msOverflowY: "hidden",
                              }}
                            >
                              {foursquarePlaces}
                            </div>
                          </div>
                        </React.Fragment>
                      )

                    ) : null
                  }





                  {
                    currentModal !== "formLocationModal" && currentModal !== "placeModal" && (currentModal || formStepValue > 5) ? (

                      <div className="row" style={{ pointerEvents: "all" }}>
                        <div className="col jc-se">

                          <div className="row">
                            <div className="col">
                              {currentModal === "formResetModal" && !formProcessingValue ? <p>Reset review form and start over?</p> : null}
                              {currentModal !== "formResetModal" && !formProcessingValue && !loginCredentialValue ? <p>Please sign in to submit review</p> : null}
                              {formStepValue === 6 && !formProcessingValue && loginCredentialValue ? <p>Ok to submit review?</p> : null}
                              {formStepValue === 7 && formProcessingValue && loginCredentialValue ? <p>Saving review...          </p> : null}
                              {formStepValue === 7 && !formProcessingValue && loginCredentialValue ? <p>Thank you for your review.</p> : null}
                            </div>
                          </div>


                          {
                            currentModal !== "formResetModal" && formStepValue !== 7 && !loginCredentialValue && !formProcessingValue ? (
                              <div className="row">
                                <div className="col">
                                  <img
                                    src={signIn_normal}
                                    onClick={this.signInClicked}
                                    onMouseDown={this.signInDown}
                                    onMouseUp={this.signInUp}
                                    onFocus={this.signInFocus}
                                    onBlur={this.signInBlur}
                                    onTouchEnd={this.signInTouchEnd}
                                    onTouchStart={this.signInTouchStart}
                                    onTouchCancel={this.signInTouchCancel}
                                    onMouseOut={this.signInMouseOut}
                                    onMouseLeave={this.signInMouseLeave}
                                  />
                                </div>
                              </div>
                            ) : null
                          }


                          <div className="row">
                            {
                              formStepValue !== 7 && !formProcessingValue ? (
                                <div className="col">
                                  <FormNavButton
                                    data_text={
                                      currentModal === "formResetModal" && !formProcessingValue ? "Cancel" :
                                        formStepValue === 6 && !formProcessingValue ? "Cancel" :
                                          null
                                    }
                                    data_classes="button-form-modal"
                                    data_width="100px"
                                    func_navcommand={
                                      currentModal === "formResetModal" && !formProcessingValue ? "cancel" :
                                        formStepValue === 6 && !formProcessingValue ? "prev" :
                                          null
                                    }
                                  />
                                </div>

                              ) : null
                            }

                            {
                              (currentModal === "formResetModal") || (this.props.loginCredentialValue && !formProcessingValue) ? (
                                <div className="col">
                                  <FormNavButton
                                    data_text={
                                      currentModal === "formResetModal" && !formProcessingValue ? "Reset" :
                                        formStepValue === 6 ? "Submit" :
                                          formStepValue === 7 && !formProcessingValue ? "Close" :
                                            null
                                    }
                                    data_classes="button-form-modal"
                                    data_width="100px"
                                    func_navcommand={
                                      currentModal === "formResetModal" && !formProcessingValue ? "reset" :
                                        formStepValue === 6 ? "submit" :
                                          formStepValue === 7 && !formProcessingValue ? "finish" :
                                            null
                                    }
                                  />
                                </div>
                              ) : null
                            }

                          </div>

                        </div>
                      </div>
                    ) : null
                  }






                </div>
              </div>
            </section>
          )
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // geolocationValue: state.geolocationState.geolocationValue,
    formStepValue: state.formState.formStepValue,
    formProcessingValue: state.formState.formProcessingValue,
    modalState: state.modalState,
    currentModal: state.modalState.currentModal,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    selectedSectionValue: state.sectionState.selectedSectionValue,
    selectedPlaceValue: state.mapState.selectedPlaceValue,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    // reviews: state.firestore.ordered.reviews,
    loginCredentialValue: state.auth.loginCredentialValue,
    foursquareValue: state.foursquareState.foursquareValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed()),
    formNext: (step) => dispatch(formNext(step)),
    formPrev: () => dispatch(formPrev()),
    resetForm: () => dispatch(resetForm()),
    selectSection: (section) => dispatch(selectSection(section)),
    locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed()),
    signIn: () => dispatch(signIn())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ModalContainer);
