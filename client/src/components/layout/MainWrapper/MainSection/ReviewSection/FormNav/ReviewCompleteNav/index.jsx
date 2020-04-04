import React, { Component } from 'react';
import FormNavButton from '../../ReviewFormElements/FormNavButton';

export class ReviewCompleteNav extends Component {

render() {

  // const { children } = this.props;

  return (
    <div className="rs" style={{ flexDirection: "column" }}>
      <h1 className="rs">
        Thank you for your review.
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
          data_text="Close"
          data_classes="bg-grey-outline"
          data_width="fit-content"
          func_navcommand="finish"
        />
      </div>
    </div>
  )
}
}

export default ReviewCompleteNav;
