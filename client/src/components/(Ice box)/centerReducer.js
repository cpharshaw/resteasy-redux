
// const initState = {
//   centerLatValue: 39.962292,
//   centerLngValue: -75.144768,
//   numCenterUpdates: 0
// }

// const centerReducer = (state = initState, action) => {
  
//   switch (action.type) {
//     case 'CENTER_RECEIVED':
//       return {
//         ...state,
//         centerLatValue: Math.round(action.payload.lat*1000000)/1000000,
//         centerLngValue: Math.round(action.payload.lng*1000000)/1000000,
//         numCenterUpdates: state.numCenterUpdates + 1    
//       }
//     default:
//       return {
//         ...state
//       };
//   }
// };


// export default centerReducer;
