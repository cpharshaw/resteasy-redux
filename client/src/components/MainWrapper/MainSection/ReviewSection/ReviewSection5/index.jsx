import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import FormNavButton from '../ReviewForm/FormNavButton';
import FormChunk from '../ReviewForm/FormChunk';
import FormFieldGroup from '../ReviewForm/FormFieldGroup';
import {
  textEntered
} from '../../../../../store/actions/formActions';

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
              data_htmlFor={"field08_input_name"}
              data_height="30px"
            >
              Overall Comments<sup>&nbsp;(i)</sup>
            </FieldLabel>

            <textarea
              className="rs"
              name="formCommentsValue"
              style={{
                maxHeight: "110px",
                border: "0.5px dotted lightgrey",
                padding: "10px",
                textAlignLast: "left",
                textAlign: "left"
              }}
              placeholder="Write your comments here.."
              onChange={e => textEntered(e)}
              value={formCommentsValue}
            />
          </ FieldWrapper>
        </FormFieldGroup>
        <div
          className="rs"
          style={{
            height: "50px",
          }}
        >
          <div
            className="rs"
            style={{
              width: "12.5%",
            }}
          />
          <div
            className="rs"
            style={{
              width: "75%",
            }}
          >
            <FormNavButton
              data_text="Back"
              data_classes="bg-primary-invert-outline"
              func_navcommand="prev"
            />
            <FormNavButton
              data_text="Continue"
              data_classes="bg-primary-invert"
              func_navcommand="next"
            />
          </div>

          <button
            className="rs reset"
            style={{
              width: "12.5%",
              fontSize: "14px"
            }}
          >
            <img src="https://img.icons8.com/material-rounded/24/000000/recurring-appointment.png" />
          </button>
        </div>

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