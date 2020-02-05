import React, { Component } from 'react'

export class LocationSelector extends Component {

  render() {

    const {
      data_height,
      data_width,
      func_selectlocation
    } = this.props;

    return (
      <button
        id="locationSelectorButton"
        className="rs"
        onClick={func_selectlocation}
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          border: "1.25px dashed grey",
          borderRadius: "5px"
        }}
      >
        <em><span style={{color: "grey", fontSize: "14.5px"}}>Select location...</span></em>
      </button>
    )
  }
}

export default LocationSelector;
