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
         <HorizontalRule />

          < FieldWrapper
            data_id="field08"
            data_flexdirection="column"
            data_margin="15px 0 0 0"
          >

            < FieldLabel
              data_htmlFor={"field08_input_name"}
              data_height="30px"
            >
              Comments<sup>&nbsp;(i)</sup>
            </FieldLabel>

            <textarea
              className="rs"
              style={{
                maxHeight: "110px",
                border: "0.5px dotted lightgrey",
                padding: "10px",
                textAlignLast: "left",
                textAlign: "left"
              }}
              placeholder="Write your comments here.."
            />
          </ FieldWrapper>

        <div
          className="rs"
          style={{
            // position: "absolute",
            height: "50px",
            // padding: "8px",
            // justifyContent: "space-evenly"
          }}>
          <FormNavButton
            data_text="Finish"
            data_classes="bg-primary-invert"
            func_navcommand="next"
          />          
          <FormNavButton
            data_text="Back"
            data_classes="bg-primary-invert-outline"
            func_navcommand="prev"
          />
        </div>

      </FormChunk >
    )
  }
}

export default ReviewSection5;
