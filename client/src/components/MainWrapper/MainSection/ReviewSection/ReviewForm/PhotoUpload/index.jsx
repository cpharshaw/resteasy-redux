import React, { Component } from 'react'
import FieldWrapper from '../FieldWrapper';
import FieldLabel from '../FieldLabel';

export class PhotoUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
    this.photos = []
  };


  buttonClick(e) {
    e.preventDefault();
    document.getElementById("photoUpload").click();
  }


  onChange(event) {
    const filesObj = event.target.files;
    const keys = Object.keys(filesObj);

    const photosArr = [];

    keys.forEach((key, i) => {
      const reader = new FileReader();
      const file = filesObj[key];

      reader.onload = () => {
        const imgSrc = reader.result;

        const photo = React.createElement(
          "img",
          {
            key: i,
            src: imgSrc,
            style: {
              display: "flex",
              width: "100px",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              margin: "0 auto",
              padding: "0",
              textAlign: "center",
              flexWrap: "wrap",
              border: "0"
            }
          },
          null
        );

        photosArr.push(photo);

        if (photosArr.length === keys.length) {
          this.setState({
            photos: [...this.state.photos, ...photosArr]
          });
          console.log("Done!", this.state.photos);
        }


      };

      reader.readAsDataURL(file);


    });


  };





  render() {

    return (
      <FieldWrapper data_flexDirection="column" data_height="fit-contents">
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
                width: "70%",
                height: "100%",
                margin: "0 auto",
                padding: "0",
                border: "0",
                background: "inherit"

              }
            }>
            Choose photo(s)
          </button>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {this.state.photos.length > 0 ? this.state.photos : null}
          </div>
        </div>

      </FieldWrapper>
    )
  }
}

export default PhotoUpload;
