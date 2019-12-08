
export const getGeolocation = () => {

  return (

    (dispatch, getState) => {

      const getPosition = function (options) {
        return new Promise(
          function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
          }
        );
      }

      getPosition()
        .then(
          position => {
            dispatch({
              type: "GEOLOCATION_SUCCESS",
              payload: position.coords
            });
            console.log("gathered location", position.coords)
            // console.log("getState: ", getState())
          }
        )
        .catch(
          err => {
            dispatch({
              type: "GEOLOCATION_ERROR",
              payload: err
            });
            console.log("error gathering location", err)
            console.log("getState after geo error: ", getState())
          }
        );


    }
  )

};
