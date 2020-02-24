import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../ReviewFormElements/FieldWrapper';
import FieldLabel from '../../ReviewFormElements/FieldLabel';
import FormNavButton from '../../ReviewFormElements/FormNavButton';
import FormChunk from '../../ReviewFormElements/FormChunk';
import FormFieldGroup from '../../ReviewFormElements/FormFieldGroup';
import {
  textEntered
} from '../../../../../../store/actions/formActions';

import ReviewMainNav from '../../ReviewNav/ReviewMainNav';

export class ReviewSection5 extends Component {

  render() {

    const {
      textEntered,
      formCommentsValue,
    } = this.props;

    return (

      <FormChunk
        className="rs"
        data_padding="20px 5px 13px 5px"
      // data_bgcolor="red"
      >
        <FormFieldGroup
          data_height="calc(100% - 75px)"
        >
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
              placeholder="Write your comments here.."
              onChange={e => textEntered(e)}
              value={formCommentsValue}
            />
          </ FieldWrapper>
        </FormFieldGroup>
        
        <ReviewMainNav />

      </FormChunk >
    )
  }
}

// export default ReviewSection5;

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue,
    formCommentsValue: state.formState.formCommentsValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    textEntered: (data) => dispatch(textEntered(data)),
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection5);