import React, { Component } from 'react'
import { toggleMapList } from '../../store/actions/mapListActions';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class Toggler extends Component {

  newReview = () => {
    console.log("screen to add a review");
  };

  findRestroom = () => {
    // this.props.toggleMapList();
    // console.log("clicked toggler button", this.props)

    console.log("find a restroom");
  };

  goToAccount = () => {
    console.log("screen displaying my account and prior reviews");
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
          onClick={this.newReview}
          style={{
            background: "red",
            width: "33.33333%",
            height: "100%"
          }}
        >
          +
        </button>
        <button
          onClick={this.findRestroom}
          style={{
            background: "green",
            width: "33.33334%",
            height: "100%"
          }}
        >
          Find restroom
        </button>
        <button
          onClick={this.goToAccount}
          style={{
            background: "blue",
            width: "33.33333%",
            height: "100%"
          }}
        >
          Account
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

