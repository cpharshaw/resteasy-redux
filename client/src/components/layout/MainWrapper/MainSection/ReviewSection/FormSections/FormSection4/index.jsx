import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../../../../../sharedComponents/formComponents/FieldWrapper';
import FieldLabel from '../../../../../../sharedComponents/formComponents/FieldLabel';

import {
  formNext,
  formPrev,
  photoInput,
  deletePhoto
} from '../../../../../../../store//actions/formActions';




export class FormSection4 extends Component {

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
            className=" animated pulse fast"
            key={"div" + i}
            style={{
              position: "relative",
              width: "130px",
              height: "auto",
              margin: "4px 8px 4px 8px",
              flexWrap: "wrap",
              alignSelf: "flex-start",
              // background: "grey"
            }}
          >
            <img
              id=""
              className=""
              key={"img" + i}
              src={newImgSrc}
              style={{
                maxWidth: "130px",
                height: "inherit",
                maxHeight: "195px",
                flexWrap: "wrap",
                borderRadius: "10px"
              }}
            />
            <button
              id=""
              key={"button" + i}
              className=""
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
                className=""
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
      <div id="reviewSection4" className="row animated fadeIn fast">
        <div className="col jc-c">

          <div className="row"
            style={{
              maxHeight: "fit-content",
              maxWidth: "fit-content"
            }}
          >
            <div className="col" >
              <FieldLabel
                data_padding="0"
                data_text="Photo Upload"
                data_htmlFor="formPhotoUploadValue"
              />
            </div>
          </div>

          <div className="row mt-3"
            style={{
              maxHeight: "fit-content",
            }}
          >

            <div className="col ai-c">

              <div className="row jc-c"
                style={{
                  // visibility: "hidden",
                  maxHeight: "fit-content",
                  visibility: photosArrValue.length >= 2 ? "hidden" : null,
                }}
              >

                <input
                  id="formPhotoUploadValue1"
                  className=""
                  name="formPhotoUploadValue skip"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onInput={this.selectPhoto}
                  style={{
                    display: "none"
                  }}
                />

                <button
                  className="mx-5"
                  onClick={this.buttonClick}
                  style={{
                    visibility: "inherit"
                  }}
                >
                  <img
                    className=""
                    src="https://img.icons8.com/material-outlined/64/000000/image-gallery.png"
                    style={{
                    }}
                  />
                </button>

                <input
                  id="formPhotoUploadValue2"
                  className=""
                  name="formPhotoUploadValue"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onInput={this.selectPhoto}
                  capture="camera"
                  style={{
                    display: "none"
                  }}
                />

                <button
                  className="mx-5"
                  onClick={this.buttonClickCamera}
                  style={{
                    visibility: "inherit"
                  }}
                >
                  <img
                    className=""
                    src="https://img.icons8.com/material-outlined/64/000000/unsplash.png"
                    style={{

                    }}
                  />
                </button>

              </div>

              <div id="photoDisplay" className="row mt-3"
                style={{
                  // margin: "20px 0 0 0",
                  flexWrap: "wrap",
                  minWidth: "250px",
                  width: photosArrValue.length < 1 ? "87.5%" : "97.5%",
                  maxWidth: photosArrValue.length < 1 ? "400px" : "100%",
                  height: photosArrValue.length < 1 ? "250px" : "250px",
                  border: photosArrValue.length < 1 ? "1.25px dashed grey" : null,
                  borderRadius: photosArrValue.length < 1 ? "5px" : null
                }}
              >
                {
                  photosArrValue.length === 0 ?
                    <em>
                      <span
                        onClick={this.buttonClick}
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
                {console.log("# of photos: ", this.state.photoArr.length)}
              </div>
            </div>

          </div>



          {/* <br /> */}


        </div >
      </div >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    photosArrValue: state.formState.photosArrValue,
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
)(FormSection4);