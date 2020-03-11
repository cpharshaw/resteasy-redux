import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../ReviewFormElements/FieldWrapper';
import FieldLabel from '../../ReviewFormElements/FieldLabel';

import FormChunk from '../../ReviewFormElements/FormChunk';
import FormFieldGroup from '../../ReviewFormElements/FormFieldGroup';
import {
  formNext,
  formPrev,
  photoInput,
  deletePhoto
} from '../../../../../../store/actions/formActions';

import ReviewMainNav from '../../ReviewNav/ReviewMainNav';



export class ReviewSection4 extends Component {

  state = {
    photoArr: [],
    updated: true
  }

  nextStep = () => {
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = () => {
    this.props.formPrev();
  }

  buttonClick(e) {
    e.preventDefault();
    document.getElementById("formPhotoUploadValue1").click();
  }

  buttonClickCamera(e) {
    e.preventDefault();
    document.getElementById("formPhotoUploadValue2").click();
  }

  selectPhoto = (e) => {
    const photoFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(photoFile);
    e.target.value = "";
    reader.onload = () => {

      const arr = this.props.photosArrValue.filter((photo, i) => {
        const existingMetadata = photo.metadata;
        const existingName = existingMetadata.name + existingMetadata.lastModified + existingMetadata.size + existingMetadata.type;
        const newName = photoFile.name + photoFile.lastModified + photoFile.size + photoFile.type;
        return newName !== existingName;
      });

      if (this.props.photosArrValue.length !== arr.length) {
        console.log("dupe");
        return;
      } else {
        const photoData = {
          src: reader.result,
          metadata: photoFile
        }

        this.props.photoInput(photoData);
      }

    }

    this.setState({
      updated: false
    })

  }


  deletePhoto(e) {
    e.preventDefault();

    const photoToDelete = e.currentTarget.name;

    const newPhotosArr = this.props.photosArrValue.filter((photoData, i, arr) => {
      const currentPhoto = photoData.metadata.name + photoData.metadata.lastModified + photoData.metadata.size + photoData.metadata.type;
      return currentPhoto !== photoToDelete.substring(27, 150);
    });

    this.props.deletePhoto(newPhotosArr);

    this.setState({
      updated: false
    })
  }


  loadImgPreviews() {

    const tempArr = [];

    this.props.photosArrValue.forEach((photo, i) => {
      const newImgSrc = photo.src;
      const imgMetadata = photo.metadata;

      const leftPadWithZeros = (number, length) => {
        let str = number + '';
        while (str.length < length) {
          str = str + '0';
        }

        return str;
      }

      const random = Math.random();
      const paddedRandom = leftPadWithZeros(random, 25);
      const name = paddedRandom + "--" + imgMetadata.name + imgMetadata.lastModified + imgMetadata.size + imgMetadata.type;

      const newImgElement = () => {

        return (
          <div
            id=""
            className="rs animated pulse fast"
            key={"div" + i}
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
              className="rs"
              key={"img" + i}
              src={newImgSrc}
              style={{
                maxWidth: "120px",
                height: "inherit",
                maxHeight: "180px",
                flexWrap: "wrap",
                borderRadius: "10px"
              }}
            />
            <button
              id=""
              key={"button" + i}
              className="rs"
              name={name}
              onClick={(e) => this.deletePhoto(e)}
              style={{
                position: "absolute",
                width: "36px",
                height: "36px",
                top: "-8px",
                right: "-8px",
                background: "rgba(255,225,225,0.075)",
                border: "5px solid rgba(255,0,0,.75)",
                borderRadius: "50%",
              }}
            >
              <span
                key={"span" + i}
                className="rs"
                name={"span test"}
                pointerEvents="none"
                style={{
                  color: "red",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  background: "transparent",
                  backgroundColor: "transparent",
                }}
              >
                x
            </span>
            </button>
          </div>
        )
      }

      tempArr.push(newImgElement());

    });

    this.setState({
      photoArr: tempArr,
      updated: true
    });

  }


  componentDidUpdate(prevProps, prevState, snapshot) {

    const prevPhotos = prevProps.photosArrValue;
    const currPhotos = this.props.photosArrValue;

    if (
      (prevPhotos.length === 0 && currPhotos.length === 0 && this.state.updated === false)
      ||
      (prevPhotos.length === 0 && currPhotos.length === 1)
      ||
      (prevPhotos.length === 1 && currPhotos.length === 0)
      ||
      (prevPhotos.length === 1 && currPhotos.length === 2)
      ||
      (prevPhotos.length === 2 && currPhotos.length === 1)
    ) {
      this.loadImgPreviews();
    }

  }

  componentDidMount() {

    this.loadImgPreviews();

  }


  render() {

    const {
      selectedSectionValue,
      photosArrValue
    } = this.props;


    return (
      <FormChunk
        data_padding="20px 5px 13px 5px"
      >

        <FormFieldGroup
          data_height="calc(100% - 25px)"
        >

          <FieldWrapper
            data_flexdirection="column"
            data_height="fit-content"
          >

            <FieldLabel
              data_height="42px"
              data_htmlFor="formPhotoUploadValue"
            // data_fontsize="12px"
            >
              Photo Upload 
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
                  visibility: photosArrValue.length >= 2 ? "hidden" : null,
                }}
              >

                <input
                  id="formPhotoUploadValue1"
                  // className="rs"
                  name="formPhotoUploadValue"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onInput={this.selectPhoto}
                  // title=" "
                  // ccapture=""
                  style={{
                    display: "none"
                  }}
                />

                <button
                  className="rs"
                  onClick={this.buttonClick}
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

                <input
                  id="formPhotoUploadValue2"
                  // className="rs"
                  name="formPhotoUploadValue"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onInput={this.selectPhoto}
                  // title=" "
                  capture="camera"
                  style={{
                    display: "none"
                  }}
                />

                <button
                  className="rs"
                  onClick={this.buttonClickCamera}
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
                id="photoDisplay"
                style={{
                  flexDirection: "row",
                  margin: "10px 0 0 0",
                  flexWrap: 'wrap',
                  // alignContent: "flex-start",
                  // backgroundImage: photosArrValue.length < 1 ? "linear-gradient(to bottom right, rgba(211,211,211,.75), rgba(245,245,245,.45))" : null,
                  width: photosArrValue.length < 1 ? "225px" : null,
                  height: photosArrValue.length < 1 ? "145px" : null,
                  border: photosArrValue.length < 1 ? "1.25px dashed grey" : null,
                  borderRadius: photosArrValue.length < 1 ? "5px" : null
                }}>
                {
                  photosArrValue.length === 0 ?
                    <em>
                      <span
                        style={{
                          color: "grey",
                          fontWeight: "200",
                          fontSize: "19px",
                        }}
                      >
                        Submit <span style={{ fontWeight: "900", color: "#4c4c4c" }}> up to </span>two photos
                      </span>
                    </em>
                    :
                    this.state.photoArr
                }
              </div>
            </div>

          </FieldWrapper>

          <br />


        </FormFieldGroup>

        {/* < ReviewMainNav /> */}

      </FormChunk >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    photosArrValue: state.formState.photosArrValue,
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
    photoInput: data => dispatch(photoInput(data)),
    deletePhoto: data => dispatch(deletePhoto(data))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection4);