import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MapSection from './MapSection/';
import ListSection from './ListSection/';


export class MapListSection extends Component {

  render() {
    
    return (
      <div
        id="mapListSection"
        className="rs animated fadeIn faster"
        style={{
          // height: "calc(100% - 114px)",
          // overflowY: "scroll",
          // background: "#f5f5f5",
          position: "fixed",
          bottom: "50px",
          height: "calc(100% - 122px)",
          // background: "red",        
        }}
      >
        < ListSection data_display={!this.props.mapListToggleValue} />
        < MapSection data_display={this.props.mapListToggleValue} />
        {/* {console.log("mapListToggleValue: ", this.props.mapListToggleValue)} */}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListSection);
