// export const getLocations = () => {

//   return (
//     dispatch => {
//       const geolocation = navigator.geolocation;

//       geolocation
//         .getCurrentPosition(
//           position => {

//             console.log(position.coords);

//             dispatch({
//               type: 'GEOLOCATION_SUCCESS',
//               payload: position
//             })
//           }
//         )
//         .catch(
//           err => {
//             dispatch({
//               type: 'GEOLOCATION_ERROR',
//               error: err
//             })
//           }
//         )
//     }

// }


export const getGeolocation = () => {

  return (
    async dispatch => {
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition(
        position => {
          // dispatch({
          //   type: "GEOLOCATION_SUCCESS",
          //   payload: position.coords
          // });
          return {
            type: "GEOLOCATION_SUCCESS",
            payload: position.coords
          };          
        },
        err => {
          // dispatch({
          //   type: "GEOLOCATION_ERROR",
          //   payload: err
          // });
          return {
            type: "GEOLOCATION_ERROR",
            payload: err
          };          
        });
    }
  )

};
