import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../../../../../sharedComponents/formComponents/FieldWrapper';
import FieldLabel from '../../../../../../sharedComponents/formComponents/FieldLabel';
import {
  textEntered
} from '../../../../../../../store//actions/formActions';


export class FormSection5 extends Component {

  render() {

    const {
      textEntered,
      formCommentsValue,
      formOutOfOrderValue
    } = this.props;

    return (
      <>

        < FieldWrapper
          data_id="field08"
          data_flexdirection="column"
          data_margin="15px 0 0 0"
        >

          < FieldLabel
            data_htmlFor="formCommentsValue"
            data_height="30px"
          >
            Overall Comments
            </FieldLabel>

          <textarea
            className="rs"
            name="formCommentsValue"
            style={{
              width: "92.5%",
              maxHeight: "220px",
              border: "2px dotted lightgrey",
              padding: "10px",
              // marginLeft: "30px",
              // marginRight: "30px",
              textAlignLast: "left",
              textAlign: "left"
            }}
            placeholder={formOutOfOrderValue ? "This restroom was out of order..." : "Write your comments here.."}
            onChange={e => textEntered(e)}
            value={formCommentsValue}
          />
        </ FieldWrapper>
        
      </ >
    )
  }
}

// export default ReviewSection5;

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue,
    formCommentsValue: state.formState.formCommentsValue,
    formOutOfOrderValue: state.formState.formOutOfOrderValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    textEntered: (data) => dispatch(textEntered(data)),
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormSection5);