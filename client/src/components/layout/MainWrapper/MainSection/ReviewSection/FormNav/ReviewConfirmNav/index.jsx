import React, { Component } from 'react';
import FormNavButton from '../../ReviewFormElements/FormNavButton';

export class ReviewConfirmNav extends Component {
  render() {
    return (
      <div className="rs" style={{ flexDirection: "column" }}>
        <h1 className="rs">
          Ok to submit review?
                  </h1>
        <div
          className="rs"
          style={{
            // position: "absolute",
            height: "50px",
            // background: "red",
            marginBottom: "20px"
            // padding: "8px",
            // justifyContent: "space-evenly"
          }}>
          <FormNavButton
            data_text="Back"
            data_classes="bg-primary-invert"
            func_navcommand="prev"
          />
          <FormNavButton
            data_text="Submit"
            data_classes="bg-grey-outline"
            func_navcommand="next"
          />
        </div>
      </div>
    )
  }
}

export default ReviewConfirmNav;
