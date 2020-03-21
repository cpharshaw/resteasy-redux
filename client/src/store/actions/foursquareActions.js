import { getDistance } from 'geolib';
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
              radius: 500,
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

            dispatch({
              type: "FOURSQUARE_SUCCESS",
              payload: newData
            });
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
