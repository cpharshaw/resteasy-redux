import React, { Component } from 'react'
import FieldWrapper from '../FieldWrapper';
import FieldLabel from '../FieldLabel';
import HorizontalRule from '../HorizontalRule';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class PhotoUpload extends Component {


  buttonClick(e) {
    e.preventDefault();
    document.getElementById("photoUpload").click();
  }

  buttonClickCamera(e) {
    e.preventDefault();
    document.getElementById("cameraUpload").click();
  }

  deletePhoto(e) {
    const { imgElementArr } = this.props.data_values;
    e.preventDefault();
    const photoToDelete = e.currentTarget.name;

    const newImgElementArr = imgElementArr.filter((photo, i, arr) => {
      const photoToCheck = photo.props.name;
      return photoToCheck !== photoToDelete;
    });

    console.log("returned", newImgElementArr);

    this.props.func_handlechange(null, ["delete", newImgElementArr]);

  }


  onChange(e) {

    this.props.func_handlechange(e);

    const files = this.props.data_values.photos;

    // const files = e.target.files;

    const keys = Object.keys(files);
    // const tempImgSrcArr = [];
    const tempImgElementArr = [];

    keys.forEach((key, i) => {
      const reader = new FileReader();
      const photo = files[key];


      reader.onload = () => {
        const newImgSrc = reader.result;
        const fullDate = new Date();
        const year = fullDate.getFullYear();
        const month = fullDate.getMonth() + 1;
        const date = fullDate.getDate();
        const time = fullDate.getTime();
        const newImgKey = i + "__" + year + "_" + month + "_" + date + "_" + time;


        const newImgElement = () => {

          return (
            <div
              id=""
              key={"div" + newImgKey}
              className="rs"
              name={"photo" + newImgKey}
              style={{
                position: "relative",
                width: "120px",
                height: "auto",
                margin: "0 8px 0 8px",
                flexWrap: "wrap",
                alignSelf: "flex-start",
                // background: "grey"
              }}
            >
              <img
                id=""
                key={"img" + newImgKey}
                className="rs"
                name={"photo" + newImgKey}
                src={newImgSrc}
                style={{
                  maxWidth: "120px",
                  height: "inherit",
                  maxHeight: "180px",
                  // alignSelf: "flex-start",
                  flexWrap: "wrap",
                  borderRadius: "10px"
                }}
              />
              <button
                id=""
                key={"button" + newImgKey}
                className="rs"
                name={"photo" + newImgKey}
                onClick={(e) => this.deletePhoto(e)}
                style={{
                  position: "absolute",
                  width: "36px",
                  height: "36px",
                  // margin: "0 0 -45px 0",
                  // margin: "10px 10px 10px 10px",
                  top: "-8px",
                  right: "-8px",
                  // alignSelf: "center",
                  background: "rgba(255,225,225,0.075)",
                  border: "5px solid rgba(255,0,0,.75)",
                  borderRadius: "50%",
                }}
              >
                <span
                  key={"span" + newImgKey}
                  className="rs"
                  name={"photo " + newImgKey}
                  // onClick={(e) => this.deletePhoto(e)}
                  pointerEvents="none"
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    fontSize: "16px"
                  }}
                >
                  x
                </span>
              </button>
            </div>
          )
        }

        tempImgElementArr.push(newImgElement());

        if (tempImgElementArr.length === keys.length) {
          this.props.func_handlechange(null, ["add", tempImgElementArr]);
        }

      };

      reader.readAsDataURL(photo);

    });


  };




  render() {

    const {
      func_handlechange,
      data_values
    } = this.props;

    const { imgElementArr } = data_values;


    return (
      <FieldWrapper
        data_flexdirection="column"
        data_height="fit-content"
      >

        <FieldLabel
          data_height="42px"
          data_fontsize="12px"
        >
          Photo Upload <sup><sup>&nbsp;(i)</sup></sup>
        </FieldLabel>


        <div
          className="rs"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            // background: "orange",
            height: "226px",
            margin: "0 auto"
          }}
        >


          <div
            className="rs"
            style={{
              // background: "grey",
              height: "64px",
              visibility: imgElementArr.length >= 2 ? "hidden" : null,
              // margin: "0 auto"
            }}
          >

            <input
              id="photoUpload"
              name="photoUpload"
              type="file"
              accept="image/*"
              multiple={true}
              onChange={e => this.onChange(e)}
              title=" "
              style={{
                display: "none"
              }}
            />

            <input
              id="cameraUpload"
              name="cameraUpload"
              type="file"
              accept="image/*"
              multiple={true}
              onChange={e => this.onChange(e)}
              title=" "
              capture="camera"
              style={{
                display: "none"
              }}
            />

            <button
              className="rs"
              onClick={(e) => this.buttonClick(e)}
              style={{
                margin: "0 auto",
                // width: "fit-content",
                height: "fit-content",
                // background: "blue"
              }}
            >
              <img
                className="rs"
                src="https://img.icons8.com/material-outlined/64/000000/image-gallery.png"
                style={{
                  width: "auto",
                  height: "auto",
                  // background: "red",
                  marginLeft: "25%"
                }}
              />
            </button>

            <button
              className="rs"
              onClick={(e) => this.buttonClickCamera(e)}
              style={{
                margin: "0 auto",
                // width: "fit-content",
                height: "fit-content",
                // background: "green"
              }}
            >
              <img
                className="rs"
                src="https://img.icons8.com/material-outlined/64/000000/unsplash.png"
                style={{
                  width: "auto",
                  height: "auto",
                  // background: "yellow",
                  marginRight: "25%"
                }}
              />
            </button>

          </div>

          <div
            className="rs"
            style={{
              flexDirection: "row",
              margin: "10px 0 0 0",
              flexWrap: 'wrap',
              // alignContent: "flex-start",
              // backgroundImage: this.state.imgElementArr.length < 1 ? "linear-gradient(to bottom right, rgba(211,211,211,.75), rgba(245,245,245,.45))" : null,
              width: imgElementArr.length < 1 ? "225px" : null,
              height: imgElementArr.length < 1 ? "145px" : null,
              border: imgElementArr.length < 1 ? "1.25px dashed grey" : null,
              borderRadius: imgElementArr.length < 1 ? "5px" : null
            }}>
            {
              imgElementArr.length > 0 ?
                <div
                  id="uploadedPhotos"
                  className="rs"
                  style={{ alignContent: "flex-start" }}
                >
                  {imgElementArr}
                </div>
                :
                <em>
                  <span
                    style={{
                      color: "grey",
                      fontWeight: "200",
                      fontSize: "19px",
                    }}
                  >
                    Submit up to <span style={{ fontWeight: "900", color: "#4c4c4c" }}>two</span> photos
                  </span>
                </em>
            }
          </div>
        </div>

      </FieldWrapper>
    )
  }
}

// export default PhotoUpload;


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    data_values: ownProps.data_values,
    func_handlechange: ownProps.func_handlechange,
    selectedSectionValue: ownProps.display
  }
}


export default compose(
  connect(mapStateToProps, null)
)(PhotoUpload);