import React, { Component } from 'react'
import { toggleMapList } from '../../store/actions/mapListActions';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class Toggler extends Component {

  handleClick = () => {
    this.props.toggleMapList();
    // console.log("clicked toggler button", this.props)
  };


  render() {
    return (
      <div
        style={{
          background: "gray",
          position: "absolute",
          bottom: "0",
          height: "7vh",
          width: "100%"
        }}
      >
        <button
          onClick={this.handleClick}
          style={{
            background: "red",
            width: "100%",
            height: "100%"
          }}
        >
          This toggles shit
        </button>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    toggleMapList: () => dispatch(toggleMapList())
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(Toggler)

