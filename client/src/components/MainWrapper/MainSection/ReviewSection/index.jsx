import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';


export class ReviewSection extends Component {

  render() {

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    return (
      <div
        style={
          {
            display: displayValue,
            flexDirection: "column",
            width: "100%",
            height: "calc(100vh - 84px)",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            background: "whitesmoke"
          }
        }
      >
        <form
          id="reviewForm"
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >

          <div
            id="field01_wrapper"
            style={
              {
                display: "flex",
                width: "100%",
                // height: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                padding: "0",
                border: "0",
                background: "grey"
              }
            }
          >
            <label
              htmlFor="field01_label"
              style={
                {
                  display: "flex",
                  // flexGrow: "1",
                  width: "35%",
                  height: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignContent: "center",
                  margin: "0 auto",
                  padding: "0",
                  border: "1px solid #44aacc",
                  background: "red"
                }
              }
            >
              Shit
            </label>

            <div
              id="field01_inputs"
              style={
                {
                  display: "flex",
                  // flexGrow: "3",
                  width: "100%",
                  height: "100%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignContent: "center",
                  margin: "0 auto",
                  padding: "0",
                  border: "0",
                  background: "blue"
                }
              }
            >
              <input
                id="field01_input01"
                value="field01_input01_value"
                name="field01_input_name"
                type="radio"
                style={
                  {
                    display: "flex",
                    // flexGrow: "1",
                    // width: "65%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    margin: "0 auto",
                    padding: "0",
                    border: "0",
                    background: "green"
                  }
                }
              >
              </input>
              <input
                id="field01_input02"
                type="radio"
                value="field01_input02_value"
                name="field01_input_name"
                style={
                  {
                    display: "flex",
                    // flexGrow: "1",
                    // width: "65%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    margin: "0 auto",
                    padding: "0",
                    border: "0",
                    background: "yellow"
                  }
                }
              >
              </input>

              <input
                id="field01_input03"
                type="radio"
                value="field01_input03_value"
                name="field01_input_name"
                style={
                  {
                    display: "flex",
                    // flexGrow: "1",
                    // width: "65%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    margin: "0 auto",
                    padding: "0",
                    border: "0",
                    background: "yellow"
                  }
                }
              >
              </input>

              <input
                id="field01_input04"
                type="radio"
                value="field01_input04_value"
                name="field01_input_name"
                style={
                  {
                    display: "flex",
                    // flexGrow: "1",
                    // width: "65%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    margin: "0 auto",
                    padding: "0",
                    border: "0",
                    background: "yellow"
                  }
                }
              >
              </input>

              <input
                id="field01_input05"
                type="radio"
                value="field01_input05_value"
                name="field01_input_name"
                style={
                  {
                    display: "flex",
                    // flexGrow: "1",
                    // width: "65%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    margin: "0 auto",
                    padding: "0",
                    border: "0",
                    background: "yellow"
                  }
                }
              >
              </input>

            </div>
          </div>
        </form>

        {/* 
          <div className="row flex-nowrap d-flex align-items-center">
            <div className="col-sm-4 categoryLabel">Cleanliness:</div>
            <div className="col-sm-8 star-rating">
              <div className="star-rating__wrap ">
                <input className="star-rating__input" id="clean-rating-5" type="radio" name="rating" value="5" onClick={e => this.onStarClick_Clean(e)} />
                <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-5" title="5 out of 5 stars"></label>
                <input className="star-rating__input" id="clean-rating-4" type="radio" name="rating" value="4" onClick={e => this.onStarClick_Clean(e)} />
                <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-4" title="4 out of 5 stars"></label>
                <input className="star-rating__input" id="clean-rating-3" type="radio" name="rating" value="3" onClick={e => this.onStarClick_Clean(e)} />
                <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-3" title="3 out of 5 stars"></label>
                <input className="star-rating__input" id="clean-rating-2" type="radio" name="rating" value="2" onClick={e => this.onStarClick_Clean(e)} />
                <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-2" title="2 out of 5 stars"></label>
                <input className="star-rating__input" id="clean-rating-1" type="radio" name="rating" value="1" onClick={e => this.onStarClick_Clean(e)} />
                <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-1" title="1 out of 5 stars"></label>
              </div>
            </div>
          </div> 
        */}

      </div >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);