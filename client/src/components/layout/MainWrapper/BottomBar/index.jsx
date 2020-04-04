import React, { Component } from 'react';
// import { toggleMapList } from '../../../store/actions/mapListActions';
import { selectSection } from '../../../../store/actions/sectionActions';

import { connect } from 'react-redux';
import { compose } from 'redux';


export class BottomBar extends Component {


  selectSection = e => {
    const newValue = e.currentTarget.value;
    // const newValue = event.currentTarget.getAttribute('value');
    // console.log("bottom bar selected section: ", newValue);
    this.props.selectSection(newValue);

  };

  render() {

    const {
      data_height,
      selectedSectionValue
    } = this.props;


    return (

      <div className="row h-100 bg-primary">

        <div className="col bg-primary">
          <button
            className="div-button bg-primary"
            onClick={e => this.selectSection(e)}
            value="review"
            style={{
            }}
          >
            <svg
              // className="w-100 h-100"
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 172 172"
              style={{
                height: "35.7px",
                width: "35.7px",
                // border: "1px solid white",
                // borderTopStyle: "inset",
                borderRadius: "50%",
              }}
            >
              <g
                fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="" />
                <g fill={selectedSectionValue === "review" ? "#f5f5f5" : "darkgrey"}>
                  <path d="M136.912,167.184c-0.688,0 -1.376,-0.344 -1.72,-0.688l-49.192,-31.304l-49.192,31.648c-1.032,0.688 -2.752,0.688 -3.784,0c-1.032,-0.688 -1.72,-2.408 -1.376,-3.784l15.136,-56.416l-45.408,-37.152c-1.376,-1.032 -1.72,-2.408 -1.376,-3.784c0.344,-1.376 1.72,-2.408 3.096,-2.408l58.48,-3.096l21.328,-54.696c0.344,-1.032 1.72,-2.064 3.096,-2.064c1.376,0 2.752,1.032 3.096,2.064l21.328,54.696l58.48,3.096c1.376,0 2.752,1.032 3.096,2.408c0.344,1.376 0,2.752 -1.032,3.784l-45.752,37.152l14.792,56.416c0.344,1.376 0,2.752 -1.376,3.784c-0.344,0 -1.032,0.344 -1.72,0.344zM86,127.624c0,0 1.376,0.344 1.72,0.688l43.344,27.864l-13.072,-49.88c-0.344,-1.376 0,-2.752 1.032,-3.44l40.248,-33.024l-51.6,-2.752c-1.376,0 -2.408,-1.032 -3.096,-2.064l-18.576,-48.504z" />
                </g>
              </g>
            </svg>
          </button>
        </div>

        <div className="col bg-primary">
          <button
            className="div-button bg-primary"
            onClick={e => this.selectSection(e)}
            value="mapList"
          >
            <svg
              // className="w-100 h-100"
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 172 172"
              style={{ marginLeft: "5px", height: "38px", width: "38px" }}
            >
              <g
                fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="" />
                <g fill={selectedSectionValue === "mapList" ? "#f5f5f5" : "darkgrey"}>
                  <path d="M129,0c-15.83117,0 -28.66667,12.8355 -28.66667,28.66667c0,20.47517 28.66667,50.16667 28.66667,50.16667c0,0 28.66667,-29.6915 28.66667,-50.16667c0,-15.83117 -12.8355,-28.66667 -28.66667,-28.66667zM129,18.42057c5.6545,0 10.2461,4.59159 10.2461,10.24609c0,5.6545 -4.5916,10.24609 -10.2461,10.24609c-5.6545,0 -10.2461,-4.59159 -10.2461,-10.24609c0,-5.6545 4.5916,-10.24609 10.2461,-10.24609zM64.27604,21.03809l-38.26888,15.31315c-2.72333,1.08933 -4.50716,3.7176 -4.50716,6.64876v100.33333c0,5.06683 5.11767,8.54043 9.82617,6.66276l33.39779,-13.36752l43,14.33333l38.26888,-15.29915c2.72333,-1.0965 4.50716,-3.7316 4.50716,-6.66276v-53.13411c-4.95933,6.30666 -9.34175,11.01292 -11.19792,12.93359l-3.13542,3.2474v32.11003l-21.5,8.5944v-48.31901c-3.79117,-4.257 -9.202,-10.72424 -14.33333,-18.39258v67.35547l-28.66667,-9.54622v-85.24414l17.39876,5.79492c-1.87767,-5.2675 -3.06543,-10.58741 -3.06543,-15.73307c0,-0.129 0.02799,-0.24893 0.02799,-0.37793zM57.33333,39.2487v84.89421l-21.5,8.6084v-84.89421z" />
                </g>
              </g>
            </svg>
          </button>
        </div>

        <div className="col bg-primary">
          <button
            className="div-button bg-primary"
            onClick={e => this.selectSection(e)}
            value="myStuff"
          >
            <svg
              // className="w-100 h-100"
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 172 172"
              style={{ height: "38px", width: "38px", borderRadius: "50%" }}
            >
              <g
                fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="" />
                <g fill={selectedSectionValue === "myStuff" ? "#f5f5f5" : "darkgrey"}>
                  <path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM86,34.04167c12.86417,0 23.29167,10.4275 23.29167,23.29167c0,12.86417 -10.4275,23.29167 -23.29167,23.29167c-12.86417,0 -23.29167,-10.4275 -23.29167,-23.29167c0,-12.86417 10.4275,-23.29167 23.29167,-23.29167zM86,143.33333c-19.85167,0 -37.33833,-10.09067 -47.62967,-25.42017c8.03383,-11.68167 33.626,-17.57983 47.62967,-17.57983c14.00367,0 39.59583,5.89817 47.62967,17.57983c-10.29133,15.3295 -27.778,25.42017 -47.62967,25.42017z" />
                </g>
              </g>
            </svg>
          </button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    boundsValue: state.boundsState.boundsValue,
    data_height: ownProps.data_height
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSection: section => dispatch(selectSection(section))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(BottomBar)

