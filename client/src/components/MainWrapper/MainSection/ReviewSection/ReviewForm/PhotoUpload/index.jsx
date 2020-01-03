import React, { Component } from 'react'
import FieldWrapper from '../FieldWrapper';
import FieldLabel from '../FieldLabel';

export class PhotoUpload extends Component {

  onChange(event) {
    // e.preventDefault;
    const files = event.target.files
    console.log(files);
  }


  render() {

    return (
      <FieldWrapper>
          < FieldLabel> Photo Upload <sup>&nbsp;(i)</sup> </ FieldLabel >
          <input 
            id="photoUpload" 
            name="photoUpload"
            type="file" 
            accept="image/*"
            multiple={true}
            onChange={e => this.onChange(e)}
          />
      </FieldWrapper>
    )
  }
}

export default PhotoUpload;
