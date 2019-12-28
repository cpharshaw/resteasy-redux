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
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            background: "#A2D4E6"
          }
        }
      >

        <input
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >

          {/* <div className="row flex-nowrap d-flex align-items-center">
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
          </div> */}

        </input>

        <input
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >
          {/* ReviewSection2 */}
        </input>

        <div
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >
          ReviewSection3
        </div>

        <div
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >
          ReviewSection4
        </div>

        <div
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0"
            }
          }
        >
          ReviewSection5
        </div>


      </div>
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