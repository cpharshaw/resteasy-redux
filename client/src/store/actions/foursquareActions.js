import { getDistance } from 'geolib';
const axios = require('axios');
const endpoint = "https://api.foursquare.com/v2/venues/search";

export const getPlacesFromFoursquare = (locationPref) => {
  // console.log("getPlacesFromFoursquare ACTION triggered", location)
  return (dispatch, getState) => {
    const state = getState();
    const location = 
      locationPref == "geolocation" ? 
      state.geolocationState.geolocationLatValue + "," + state.geolocationState.geolocationLngValue
      :
      locationPref == "center" ? 
      state.mapState.centerLatValue() + "," + state.mapState.centerLngValue()
      :
      locationPref;

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
              limit: 20,
              intent: "checkin",
              v: "20191231",
              // v: "20191130",
            },
            responseType: 'json',
            transformResponse: [
              res => {
                const state = getState();
                const currLat = state.mapState.centerLatValue();
                const currLng = state.mapState.centerLngValue();
                
                // const currLat = state.geolocationState.geolocationLatValue;
                // const currLng = state.geolocationState.geolocationLngValue;
                
                const fsWIthDistance = res.response.venues.map(venue => {
                  // console.log("Raw venues: ", venue)
                  const venueLat = venue.location.labeledLatLngs ? venue.location.labeledLatLngs[0].lat : null;
                  const venueLng = venue.location.labeledLatLngs ? venue.location.labeledLatLngs[0].lng : null;
                  const venueDistance = !venue.location.labeledLatLngs ? null : getDistance(
                    { latitude: currLat, longitude: currLng },
                    { latitude: venueLat, longitude: venueLng }
                  );
                  venue.distance = venue.location.labeledLatLngs ? venueDistance : null;
                  return venue;
                });
                return fsWIthDistance.filter(venue => {
                  // console.log("ACTION: ", venue)
                  return venue && venue.location && venue.location.address && venue.location.city && venue.location.state && venue.location.postalCode && venue.location.lat && venue.location.lng
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
