import React, { Component } from 'react'
import FieldWrapper from '../FieldWrapper';
import FieldLabel from '../FieldLabel';

export class PhotoUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgSrcArr: [],
      imgElementArr: [],
      test: null
    }
    // this.deletePhoto = this.deletePhoto.bind(this);

  };


  buttonClick(e) {
    e.preventDefault();
    document.getElementById("photoUpload").click();
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
              key={"div" + newImgKey}
              name={"photo" + newImgKey}
              style={{
                display: "flex",
                position: "relative",
                width: "100px",
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                // alignSelf: "center",
                margin: "12px 8px 8px 8px",
                padding: "0",
                textAlign: "center",
                flexWrap: "wrap",
                border: "0",
                // background: "green"
              }}
            >
              <img
                key={"img" + newImgKey}
                name={"photo" + newImgKey}
                src={newImgSrc}
                style={{
                  display: "flex",
                  maxWidth: "90px",
                  height: "inherit",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  padding: "0",
                  textAlign: "center",
                  flexWrap: "wrap",
                  border: "0"
                }}
              />
              <button
                key={"button" + newImgKey}
                name={"photo" + newImgKey}
                onClick={(e) => this.deletePhoto(e)}
                style={{
                  display: "flex",
                  position: "absolute",
                  width: "36px",
                  height: "36px",
                  top: "-8px",
                  right: "-8px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  textAlign: "center",
                  padding: "0",
                  margin: "0",
                  background: "rgba(255,225,225,0.075)",
                  border: "5px solid rgba(255,0,0,.75)",
                  borderRadius: "50%",
                  // zIndex: "5"
                }}
              >
                <span
                  key={"span" + newImgKey}
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
      <FieldWrapper data_flexDirection="column" data_height="fit-content">
        <label
          htmlFor="comments"
          style={
            {
              display: "flex",
              // flexGrow: "1",
              width: "100%",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              margin: "0 auto",
              padding: "0",
              textAlign: "center",
              flexWrap: "wrap",
              border: "0",
              fontSize: "12px"
              // background: "red"
            }
          }
        >
          Photo Upload<sup>&nbsp;(i)</sup>
        </label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            id="photoUpload"
            name="photoUpload"
            type="file"
            accept="image/*"
            multiple={true}
            onChange={e => this.onChange(e)}
            title=" "
            style={
              {
                display: "none"
              }
            }
          />
          <button
            onClick={(e) => this.buttonClick(e)}
            style={
              {
                width: "100%",
                height: "100%",
                margin: "0 auto",
                padding: "0",
                border: "0",
                background: "inherit"

              }
            }>
            <em>Choose photo(s)</em>
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              alignContent: "flex-start",
              // background: "yellow",
              margin: "0",
              padding: "0",
              border: "0",
              flexWrap: 'wrap'
              // alignSelf: "flex-start",                
            }}>
            {this.state.imgElementArr.length > 0 ? this.state.imgElementArr : null}
          </div>
        </div>

      </FieldWrapper>
    )
  }
}

export default PhotoUpload;
