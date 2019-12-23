const axios = require('axios');
const endpoint = "https://api.foursquare.com/v2/venues/search";

export const getPlacesFromFoursquare = (location) => {



  return (dispatch, getState) => {

    return (
      axios
        .get(
          endpoint,
          {
            params: {
              client_id: "0LGB42K434S53KGEGHWWSIMGGAYY5KOYXBJ14SK2W1O0FNTF",
              client_secret: "FRCGLR2MJHZ2I2AMFL5PECJOERPOPCNHU3L3EYQGVYX1YU1H",
              query: "piz",
              radius: 500,
              near: "39.962292,-75.144768", //home
              // near: "39.952170,-75.166150", 
              // near: location,
              intent: "checkin",
              v: "20191130"
            }
          }
        )
        .then(
          response => {
            dispatch({
              type: "FOURSQUARE_SUCCESS",
              payload: response.data.response.venues
            });
            // console.log("gathered places: ", response)
          }
        )
        .catch(
          error => {
            dispatch({
              type: "FOURSQUARE_ERROR",
              payload: error
            });
            console.log("error gathering places", error)
          }
        )
    )

  }
};
