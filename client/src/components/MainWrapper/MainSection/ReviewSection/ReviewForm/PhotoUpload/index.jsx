import React, { Component } from 'react'
import FieldWrapper from '../FieldWrapper';
import FieldLabel from '../FieldLabel';
import HorizontalRule from '../HorizontalRule';

export class PhotoUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgSrcArr: [],
      // imgElementArr: [<div key="fuckyouineedakey" style={{ height: "202px", width: "0.01px" }}> </div>],
      imgElementArr: [],
      test: null
    }
    // this.deletePhoto = this.deletePhoto.bind(this);

  };


  buttonClick(e) {
    e.preventDefault();
    document.getElementById("photoUpload").click();
  }

  buttonClickCamera(e) {
    e.preventDefault();
    document.getElementById("cameraUpload").click();
  }

  deletePhoto(event) {
    event.preventDefault();
    const photoToDelete = event.currentTarget.name;

    const newImgElementArr = this.state.imgElementArr.filter((photo, i, arr) => {
      const photoToCheck = photo.props.name;
      return photoToCheck !== photoToDelete;
    })

    console.log("returned", newImgElementArr);

    this.setState({
      imgElementArr: newImgElementArr
    })
  }


  onChange(event) {
    const files = event.target.files;
    const keys = Object.keys(files);
    const tempImgSrcArr = [];
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
                  alignSelf: "center",
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
          this.setState({
            imgElementArr: [...this.state.imgElementArr, ...tempImgElementArr]
          });
          console.log("done!", this.state.imgElementArr);
        }

      };

      reader.readAsDataURL(photo);

    });


  };




  render() {

    return (
      <FieldWrapper
        data_flexdirection="column"
        data_height="fit-content"
      >

        <FieldLabel
          data_height="42px"
          data_fontsize="12px"
        >
          Photo Upload<sup>&nbsp;(i)</sup>
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
              visibility: this.state.imgElementArr.length >= 2 ? "hidden" : null,
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
                width: "fit-content",
                height: "fit-content"
                // background: "blue"
              }}
            >
              <img
                className="rs"
                src="https://img.icons8.com/material-outlined/64/000000/image-gallery.png"
                style={{
                  width: "auto",
                  height: "auto"
                }}
              />
            </button>

            <button
              className="rs"
              onClick={(e) => this.buttonClickCamera(e)}
              style={{
                margin: "0 auto",
                width: "fit-content",
                height: "fit-content"
                // background: "red"
              }}
            >
              <img
                className="rs"
                src="https://img.icons8.com/material-outlined/64/000000/unsplash.png"
                style={{
                  width: "auto",
                  height: "auto"
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
              // backgroundImage: this.state.imgElementArr.length < 1 ? "linear-gradient(to bottom right, rgba(211,211,211,.75), rgba(245,245,245,.45))" : null,
              width: this.state.imgElementArr.length < 1 ? "200px" : null,
              border: this.state.imgElementArr.length < 1 ? "1.25px dashed grey" : null,
              borderRadius: this.state.imgElementArr.length < 1 ? "5px" : null
            }}>
            {
              this.state.imgElementArr.length > 0 ?
                this.state.imgElementArr
                :
                <em>
                  <span
                    style={{
                      color: "grey",
                      fontWeight: "100",
                      fontSize: "14px"
                    }}
                  >
                    Submit up to two photos
                  </span>
                </em>
            }
          </div>
        </div>

      </FieldWrapper>
    )
  }
}

export default PhotoUpload;
