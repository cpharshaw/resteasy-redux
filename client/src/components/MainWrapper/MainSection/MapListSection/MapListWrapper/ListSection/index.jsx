import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';

// import { Redirect } from 'react-router-dom';


class ListSection extends Component {

  render() {

    // console.log(process.env);

    const displayValue = this.props.data_display ? null : "none";
    // console.log("all the props, ListSection: ", this.props);
    return (
      <div
        id="mapList_listSection"
        className="rs animated fadeIn faster"
        style={{
          display: displayValue,
          // position: "fixed",
          // bottom: "50px",
          // height: "calc(100% - 122px)",
          // background: "red",
        }}
      >
        <ul 
          className="rs"
          style={{
            flexDirection: "column",
          }}
        >
          <li className="" >BBQ</li>
          <li className="" >Tres leches</li>
          <li className="" >Pizza</li>
          <li className="" >{process.env.REACT_APP_CRAIGS_SECRET}</li>
          <li className="" >Pancakes</li>
          <li className="" >Acai bowls</li>
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