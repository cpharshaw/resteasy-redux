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
      <div id="reviewSection4" className="row animated fadeIn fast"

      >
        <div className="col jc-c">

          <div className="row ai-c"
            style={{
              maxHeight: "20%",
              maxWidth: "fit-content"
            }}
          >
            <div className="col">
              < FieldLabel
                data_htmlFor="formCommentsValue"
                // data_height="30px"
                data_padding="0"
                data_text="Overall Comments"
              />
            </div>
          </div>

          <div className="row"
            style={{
              maxHeight: "45%",
            }}
          >
            <div className="col">
              <textarea
                className=""
                name="formCommentsValue"
                style={{
                  width: "92.5%",
                  height: "90%",
                  border: "2px dotted lightgrey",
                  padding: "10px",
                  // marginLeft: "30px",
                  // marginRight: "30px",
                  textAlignLast: "left",
                  textAlign: "left"
                }}
                placeholder={formOutOfOrderValue ? "This restroom was out of order..." : "You obviously know what you're talking about, so please, elaborate a little why dontchya..."}
                onChange={e => textEntered(e)}
                value={formCommentsValue}
              />
            </div>
          </div>

        </div >
      </div >
    )
  }
}

// export default ReviewSection5;

const mapStateToProps = (state, ownProps) => {
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