import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ModalContainer from './Modals';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import ReviewSection from './ReviewSection/';
import MapListSection from './MapListSection/';
import MyStuffSection from './MyStuffSection/';


export class MainSection extends Component {


  render() {

    const {
      selectedSectionValue,
      currentModal
    } = this.props;

    return (

      <React.Fragment>

        < ReviewSection display={selectedSectionValue} />
        < MapListSection display={selectedSectionValue} />
        < MyStuffSection display={selectedSectionValue} />

        {currentModal !== "" ? < ModalContainer /> : null}
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    boundsValue: state.boundsState.boundsValue,
    data_height: ownProps.data_height,
    currentModal: state.modalState.currentModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainSection);