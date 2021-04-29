import { getDistance } from 'geolib';
const axios = require('axios');
const endpoint = "https://api.foursquare.com/v2/venues/search";



export const foursquareManualUpdate = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // console.log("foursquareManualUpdate");
    dispatch({
      type: "FOURSQUARE_UPDATE_REQUESTED"
    })

  }
}

export const getPlacesFromFoursquare = (locationPref) => {
  // console.log("getPlacesFromFoursquare ACTION triggered", location)
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({
      type: "FOURSQUARE_INITIATED"
    })


    const firestore = getFirestore();
    const formState = getState().formState;
    const authState = getState().auth;

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
              radius: 550,
              near: location,
              limit: 20,
              intent: "checkin",
              v: "20210315",
              // v: "20191130",
            },
            responseType: 'json',
            transformResponse: [
              res => {
                const state = getState();
                const currLat = state.geolocationState.geolocationLatValue;
                const currLng = state.geolocationState.geolocationLngValue;

                // const currLat = state.geolocationState.geolocationLatValue;
                // const currLng = state.geolocationState.geolocationLngValue;

                const fsWithDistance = res.response.venues.map(venue => {
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
                return fsWithDistance.filter(venue => {
                  // console.log("ACTION: ", venue)
                  return venue && venue.location && venue.location.address && venue.location.city && venue.location.state && venue.location.postalCode && venue.location.lat && venue.location.lng
                });
              }
            ],
          }
        )
        .then(
          res => {

            const mergedArr = [];

            let sortedFSData = res.data.sort((a, b) => {
              return a.distance - b.distance;
            }).slice(0, 10);







            const fsIDs = sortedFSData.map(fsPlace => {
              return fsPlace.id;
            });

            const firestorePlaces = firestore.collection('places');

            firestorePlaces.where('placeID', 'in', fsIDs)
              .get()
              .then(({ docs }) => {
                const docsFormatted = docs.map(place => place.data());
                const combined = sortedFSData.map(t1 => ({ ...t1, ...docsFormatted.find(t2 => t2.placeID === t1.id) }));

                // console.log("fs data: ", sortedFSData);
                // console.log("docsFormatted data: ", docsFormatted);
                // console.log("combined data: ", combined);

                dispatch({
                  type: "FOURSQUARE_SUCCESS",
                  payload: combined
                })

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
