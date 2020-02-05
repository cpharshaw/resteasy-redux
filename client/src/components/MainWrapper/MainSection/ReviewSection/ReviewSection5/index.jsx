import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import RadioInput from '../ReviewForm/RadioInput';
import CheckInput from '../ReviewForm/CheckInput';
import TextInput from '../ReviewForm/TextInput';
import InputGroupWrapper from '../ReviewForm/InputGroupWrapper';
import PhotoUpload from '../ReviewForm/PhotoUpload';
import FormNavButton from '../ReviewForm/FormNavButton';
import FormChunk from '../ReviewForm/FormChunk';
import HorizontalRule from '../ReviewForm/HorizontalRule';
import FormFieldGroup from '../ReviewForm/FormFieldGroup';
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';

export class ReviewSection5 extends Component {
  render() {
    return (

      <FormChunk
        className="rs"
        data_padding="20px 5px 13px 5px"
      // data_bgcolor="red"
      >
        ReviewSection5
        <div
          className="rs"
          style={{
            height: "50px",
            flexDirection: "column"
          }}>
          <FormNavButton
            data_text="Submit"
            data_classes="bg-grey-outline text-grey"
            // data_textcolor="#f5f5f5"
            func_navcommand="next"
          />
          <FormNavButton
            data_text="Back"
            data_classes="bg-primary-invert-outline"
            // data_borderradius="15px 0 0 15px"
            func_navcommand="prev"
          />

        </div>

      </FormChunk >
    )
  }
}

export default ReviewSection5;
