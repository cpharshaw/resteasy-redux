import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// import { Redirect } from 'react-router-dom';


class MainList extends Component {
  render() {

    // console.log("all the props, MainList: ", this.props);
    return (
      <div
        style={{
          position: "static",
          // top: "7vh",
          height: "inherit",
          width: "inherit",
          display: this.props.displayValue
          // height: "calc(100vh - 20px)"
        }}
      >
        <ul>
          <li>BBQ</li>
          <li>Tres leches</li>
          <li>Pizza</li>
          <li>Pancakes</li>
          <li>Acai bowls</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    geolocation: state.geoLocation,
    displayValue: ownProps.display ? "none" : ""
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps, null),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ])
)(MainList);