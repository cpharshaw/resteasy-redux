import React, { Component } from 'react';
import FormNavButton from '../../../../../sharedComponents/formComponents/FormNavButton';

export class ModalFormReset extends Component {
  render() {
    return (

      <div className="row"
        style={{
          boxShadow: "0 1px 3px #a8a8a8",
          borderRadius: "5px",
          background: "#f5f5f5",
          flexDirection: "column",
          // justifyContent: "flex-start",
          alignContent: "flex-start",
        }}
      >
        <div className="col">

          <p className="">Reset review form and start over?</p>

          <div className="row">
            <div className="col">
              <FormNavButton
                data_text="Cancel"
                data_classes="bg-primary-invert"
                func_navcommand="cancel"
              />
            </div>
            <div className="col">
              <FormNavButton
                data_text="Reset"
                data_classes="bg-grey-outline"
                func_navcommand="reset"
              />
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default ModalFormReset;
