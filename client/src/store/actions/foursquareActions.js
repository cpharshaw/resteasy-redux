import { getDistance } from 'geolib';
const axios = require('axios');
const endpoint = "https://api.foursquare.com/v2/venues/search";

export const getPlacesFromFoursquare = (location) => {

  // console.log(location);

  return (dispatch, getState) => {

    return (
      axios
        .get(
          endpoint,
          {
            params: {
              client_id: "0LGB42K434S53KGEGHWWSIMGGAYY5KOYXBJ14SK2W1O0FNTF",
              client_secret: "FRCGLR2MJHZ2I2AMFL5PECJOERPOPCNHU3L3EYQGVYX1YU1H",
              // query: "piz",
              radius: 500,
              //near: "39.962292,-75.144768", 
              //home

              // near: "39.952170,-75.166150", 
              near: location,
              limit: 30,
              intent: "checkin",
              v: "20191130",
            },
            responseType: 'json',
            transformResponse: [
              res => {
                const state = getState();
                const currLat = state.centerState.centerLatValue;
                const currLng = state.centerState.centerLngValue;

                // console.log(res);

                const fsWIthDistance = res.response.venues.map(venue => {
                  const venueLat = venue.location.labeledLatLngs[0].lat;
                  const venueLng = venue.location.labeledLatLngs[0].lng;
                  const venueDistance = getDistance(
                    { latitude: currLat, longitude: currLng },
                    { latitude: venueLat, longitude: venueLng }
                  );
                  venue.distance = venueDistance;
                  return venue;
                });

                // return fsWIthDistance;

                return fsWIthDistance.filter(venue => {
                  return venue.location.address && venue.location.city && venue.location.state && venue.location.postalCode
                });
              }
            ],
          }
        )
        .then(
          res => {
            const data = res.data;

            const newData = data.sort((a, b) => {
              return a.distance - b.distance;
            })

            // console.log("before sort", newData);
            // console.log("after sort", newData);

            dispatch({
              type: "FOURSQUARE_SUCCESS",
              payload: newData
              // payload: res.data.response.venues
            });
            // console.log("gathered places: ", response)
          }
        )
        .catch(
          err => {
            dispatch({
              type: "FOURSQUARE_ERROR",
              payload: err
            });
            console.log("error gathering places", err)
          }
        )
    )

  }
};
