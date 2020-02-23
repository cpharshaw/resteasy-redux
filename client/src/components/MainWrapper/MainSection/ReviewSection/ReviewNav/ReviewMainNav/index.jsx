import React, { Component } from 'react'
import FormNavButton from '../../ReviewFormElements/FormNavButton';

export class ReviewMainNav extends Component {
  render() {
    return (

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
    )
  }
}

export default ReviewMainNav;
