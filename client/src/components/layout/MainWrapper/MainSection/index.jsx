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
      currentModal,
      formStepValue
    } = this.props;

    return (

      <div className="row" style={{ background: "transparent" }}>
        <div className="col" style={{ background: "#f5f5f5" }}>

          < ReviewSection display={selectedSectionValue} />
          < MapListSection display={selectedSectionValue} />
          < MyStuffSection display={selectedSectionValue} />

          {currentModal !== "" || formStepValue === 6 || formStepValue === 7 ? < ModalContainer /> : null}
          
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    boundsValue: state.mapState.boundsValue,
    data_height: ownProps.data_height,
    currentModal: state.modalState.currentModal,
    formStepValue: state.formState.formStepValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainSection);