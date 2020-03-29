import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import ReviewSection from './ReviewSection/';
import MapListSection from './MapListSection/';
import MyStuffSection from './MyStuffSection/';


export class MainSection extends Component {


  render() {

    const {
      selectedSectionValue
    } = this.props;

    return (

      <React.Fragment>

        < ReviewSection display={selectedSectionValue} />
        < MapListSection display={selectedSectionValue} />
        < MyStuffSection display={selectedSectionValue} />

      </React.Fragment>

    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    boundsValue: state.boundsState.boundsValue,
    data_height: ownProps.data_height
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainSection);