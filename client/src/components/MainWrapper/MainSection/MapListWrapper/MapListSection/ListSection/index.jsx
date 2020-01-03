import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';

// import { Redirect } from 'react-router-dom';


class ListSection extends Component {
  
  render() {

    console.log(process.env.REACT_APP_CRAIGS_SECRET);

    const displayValue = this.props.mapListToggleValue ? null : "none";
    // console.log("all the props, ListSection: ", this.props);
    return (
      <div
        style={
          {
            display: displayValue,
            position: "static",
            // top: "7vh",
            height: "inherit",
            width: "inherit",
            padding: "0",
            margin: "0",
            // height: "calc(100vh - 20px)"
          }
        }
      >
        <ul>
          <li>BBQ</li>
          <li>Tres leches</li>
          <li>Pizza</li>
          <li>{process.env.CRAIGS_SECRET}</li>
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
    mapListToggleValue: ownProps.display
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
)(ListSection);