
export const getGeolocation = (manual) => {
  // console.log("getGeolocation ACTION triggered")


  return (

    (dispatch, getState) => {

      dispatch({
        type: "GEOLOCATION_INITIATED",
        payload: manual
      });

      // console.log("GEOLOCATION_INITIATED")

      const getPosition = function (options) {
        return new Promise(
          function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject,
              {
                // enableHighAccuracy: true,
                // maxiumumAge: 1000
              }
            );
          }
        );
      }

      getPosition()
        .then(
          position => {
            // console.log("GEOLOCATION_SUCCESS")
            dispatch({
              type: "GEOLOCATION_SUCCESS",
              payload: position.coords
            });
            // console.log("gathered location, position: ", position.coords)
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
