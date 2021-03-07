const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);



// TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS
// TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS
// TRIGGERS --- TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS --- TRIGGERS


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
//   response.send("Hello, ninjas!");
// });


// const createNotification = (notification) => {
//   return admin.firestore().collection('notifications')
//     .add(notification)
//     .then(doc => console.log("notification added", doc));
// }

// exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(
//   (doc) => {
//     const project = doc.data();
//     const notification = {
//       content: 'Added a new project',
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp()
//     }
//     return createNotification(notification);
//   });


// exports.userJoined = functions.auth.user().onCreate(
//   (user) => {
//     return admin.firestore().collection('users')
//       .doc(user.uid)
//       .get()
//       .then(doc => {
//         const newUser = doc.data();
//         const notification = {
//           content: 'Joined the party',
//           user: `${newUser.firstName} ${newUser.lastName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         }
//         return createNotification(notification);
//       });
//   });




const createPlaceReview = dataArr => {

  // functions.logger.info("createPlaceReview --> dataArr ---> ", dataArr);

  const mensArr = dataArr.map(review => review.basicInfo.restroomUsed = "Men's");
  const womensArr = dataArr.map(review => review.basicInfo.restroomUsed = "Women's");
  const genderNeutralArr = dataArr.map(review => review.basicInfo.restroomUsed = "Family/Gender-neutral");

  const getAvgScore = (scoreName, arr) => {
    const scoreArr = arr.map(review => review.scores[`${scoreName}`]);
    const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => runningTotal + reviewScore, 0);
    return (scoreTotal / scoreArr.length);
  };

  const restroomUsedFunc = (name, data) => {
    const cnt = data.length;
    functions.logger.info("fsResponseData.docs.map(review => review.data()) ---> ", fsResponseDataDocsMap);
    const cleanScoreArr = data.map(review => review.scores.cleanliness);
    const cleanAvg = (cleanScoreArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / cleanScoreArr.length).toFixed(1);

    const safetyScoreArr = data.map(review => review.scores.safety);
    const safetyAvg = (safetyScoreArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / safetyScoreArr.length).toFixed(1);

    const privacyScoreArr = data.map(review => review.scores.privacy);
    const privacyAvg = (privacyScoreArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / privacyScoreArr.length).toFixed(1);

    const comfortScoreArr = data.map(review => review.scores.comfort);
    const comfortAvg = (comfortScoreArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / comfortScoreArr.length).toFixed(1);

    const styleScoreArr = data.map(review => review.scores.style);
    const styleAvg = (styleScoreArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / styleScoreArr.length).toFixed(1);

    const weightedAvg = (((cleanAvg * 9) + (safetyAvg * 7) + (privacyAvg * 6) + (comfortAvg * 4.5) + (styleAvg * 2)) / 28.5).toFixed(1);

    const cleaningSchedule = data.map(review => review.features.cleaningSchedule).length >= 3 ? true : false;
    const babyStation = data.map(review => review.features.babyStation).length >= 3 ? true : false;

    const recentReviewsSort = data.sort((x, y) => x.reviewDatatime - y.reviewDatatime);
    const recentReviews = recentReviewsSort.slice(0, 7);

    return {
      cnt: cnt,
      cleanAvg: cleanAvg,
      safetyAvg: safetyAvg,
      privacyAvg: privacyAvg,
      comfortAvg: comfortAvg,
      styleAvg: styleAvg,
      weightedAvg: weightedAvg,
      cleaningSchedule: cleaningSchedule,
      babyStation: babyStation,
      recentReviews: recentReviews
    }
  };


  const placeID = dataArr[0].locationID;
  const placeName = dataArr[0].basicInfo.locationName;

  const admissionFreeArrLength = dataArr.map(review => review.features.admission === "Free").length || 0;
  const admissionPayArrLength = dataArr.map(review => review.features.admission === "Pay/Customers-Only").length || 0;
  functions.logger.info("admissionFreeArrLength ---> ", admissionFreeArrLength);
  functions.logger.info("admissionPayArrLength ---> ", admissionPayArrLength);
  const admission = admissionPayArrLength > admissionFreeArrLength ? "Pay" : admissionPayArrLength < admissionFreeArrLength ? "Free" : admissionFreeArrLength > 0 ? "Unknown" : "Unknown";

  const priceArr = dataArr.map(review => review.features.price);
  const price = (priceArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / priceArr.length).toFixed(1);

  const genderNeutral = dataArr.length < 3 ? "Unknown" : dataArr.map(review => review.features.genderNeutral).length >= 3 ? true : false;
  const accessible = dataArr.length < 3 ? "Unknown" : dataArr.map(review => review.features.accessible).length >= 3 ? true : false;

  const allCleanAvg = getAvgScore("cleanliness", dataArr);
  const allSafetyAvg = getAvgScore("safety", dataArr);
  const allPrivacyAvg = getAvgScore("safety", dataArr);
  const allComfortAvg = getAvgScore("comfort", dataArr);
  const allStyleAvg = getAvgScore("style", dataArr);
  const allWeightedAvg = (((allCleanAvg * 9) + (allSafetyAvg * 7) + (allPrivacyAvg * 6) + (allComfortAvg * 4.5) + (allStyleAvg * 2)) / 28.5).toFixed(1);

  const placeReview = {
    placeID: placeID,
    placeName: placeName,

    admission: admission,
    price: price,

    genderNeutral: genderNeutral,
    accessible: accessible,

    allCnt: dataArr.length,

    allCleanAvg: allCleanAvg,
    allSafetyAvg: allSafetyAvg,
    allPrivacyAvg: allPrivacyAvg,
    allComfortAvg: allComfortAvg,
    allStyleAvg: allStyleAvg,
    allWeightedAvg: allWeightedAvg,

    // writeReview: () => (
    //   dataArr[0].basicInfo.restroomUsed === "Men's" ? this.men = restroomUsedFunc("men", mensArr) :
    //     dataArr[0].basicInfo.restroomUsed === "Women's" ? this.women = restroomUsedFunc("women", womensArr) :
    //       dataArr[0].basicInfo.restroomUsed === "Family/Gender-neutral" ? this.genderNeutral = restroomUsedFunc("genderNeutral", genderNeutralArr) : null
    // )

  }

  // .writeReview()
  return admin.firestore().collection('places').doc(placeID).set(placeReview);

};



const savePlaceEntry = locationID => {
  return admin.firestore().collection('reviews')
    .where('locationID', '==', locationID)
    .get()
    .then(fsResponseData => {
      // const fsResponseData = QueryDocumentSnapshot;
      // functions.logger.info("Inside firestore get", fsResponseData);

      // const createReview = data => functions.logger.info(" passed the data array", data); // remap to bigger function 

      // functions.logger.info(" createPlaceReview(createBaseReviewArr(fsResponseData)) --> fsResponseData ---> ", fsResponseData);

      // return createBaseReviewArr(fsResponseData)
      //   .then(
      //     createReview(firestoreResponse) 
      //   );

      const fsResponseDataDocsMap = fsResponseData.docs.map(review => review.data());

      // return createReview(fsResponseDataDocs);

      functions.logger.info("fsResponseData.docs.map(review => review.data()) ---> ", fsResponseDataDocsMap);

      return createPlaceReview(fsResponseDataDocsMap);

      // return createBaseReviewArr(fsResponseData);

    });
}

exports.reviewSubmitted = functions.firestore.document('reviews/{reviewID}').onCreate(
  (QueryDocumentSnapshot) => {
    const responseData = QueryDocumentSnapshot.data();
    const locationID = responseData.locationID;
    // functions.logger.info("Hello response data... ", responseData);
    // functions.logger.info("typeof... ", typeof responseData);

    return savePlaceEntry(locationID);

    // const test = { 
    //   "comments": "", 
    //   "userID": "RseEGIFFIuPhqXcFCEfAMSlIID22", 
    //   "reviewDatetime": { "_nanoseconds": 578000000, "_seconds": 1611526982 }, 
    //   "photos": ["https://res.cloudinary.com/resteasyredux/image/upload/v1611526985/lrakygfuxj2xruodz6xy.jpg"], 
    //   "scores": { "comfort": "5", "style": "3", "privacy": "4", "safety": "4", "cleanliness": "5" }, 
    //   "locationID": "4c94173ef7cfa1cd2acbb015", 
    //   "basicInfo": { 
    //     "locationState": "MD", 
    //     "locationCategory": "Pool", 
    //     "outOfOrder": false, 
    //     "locationCity": "College Park", 
    //     "restroomUsed": "Men's", 
    //     "timeOfVisit": "Morning", 
    //     "locationZip": "20740", 
    //     "locationCountry": "United States", 
    //     "locationName": "Seven Springs Neighborhood Pool", 
    //     "locationNotes": "" }, 
    //   "features": { 
    //     "price": "", 
    //     "babyStation": false, 
    //     "admission": "Free", 
    //     "genderNeutral": false, 
    //     "cleaningSchedule": false, 
    //     "accessible": false 
    //   } 
    // }

    // return admin.firestore().collection('reviews')
    //   .where('locationID', '==', doc.locationID)
    //   .get()
    //   .then(firestoreResponse => {
    //     functions.logger.info("Inside firestore get!", { structuredData: true });
    //     return;
    //   });

  });










// })


// men: {
//   cnt: null,
//   cleanAvg: null,
//   safetyAvg: null,
//   privacyAvg: null,
//   comfortAvg: null,
//   styleAvg: null,
//   weightedAvg: null,
//   outOfOrder: false,
//   cleaningSchedule: false,
//   babyStation: false,
//   recentReviews: []
// },
// women: {
//   cnt: null,
//   cleanAvg: null,
//   safetyAvg: null,
//   privacyAvg: null,
//   comfortAvg: null,
//   styleAvg: null,
//   weightedAvg: null,
//   outOfOrder: false,
//   cleaningSchedule: false,
//   babyStation: false,
//   recentReviews: []
// },
// genderNeutral: {
//   cnt: null,
//   cleanAvg: null,
//   safetyAvg: null,
//   privacyAvg: null,
//   comfortAvg: null,
//   styleAvg: null,
//   weightedAvg: null,
//   outOfOrder: false,
//   cleaningSchedule: false,
//   babyStation: false,
//   recentReviews: []
// },






  // const getFeatures = (featureName) => {
  //   const featureArr = firestoreResponse.map(review => review.features[`${featureName}`] ? 1 : 0);
  //   const featureTotal = featureArr.reduce((featureTotal, feature) => featureTotal + feature, 0);
  //   return (featureTotal / featureArr.length);
  // };

  // const aggregateField = (source, field, type) => {
  //   const fieldArr = firestoreResponse.map(review => {
  //     return review[`${source}`][`${field}`] ? (
  //       type === "score" ? review[`${source}`][`${field}`] : 1
  //     ) : 0
  //   });
  //   const fieldTotal = fieldArr.reduce((fieldTotal, field) => fieldTotal + field, 0);
  //   return (fieldTotal / fieldArr.length);
  // };

  // firestoreResponse.forEach(review => {
  //   const cleanlinessScore = aggregateField("scores", "cleanliness", "score");
  //   const styleScore = aggregateField("scores", "style", "score");
  //   const comfortScore = aggregateField("scores", "comfort", "score");
  //   const safetyScore = aggregateField("scores", "safety", "score");
  //   const privacyScore = aggregateField("scores", "privacy", "score");
  //   const accessible = aggregateField("features", "accessible", "binary");
  //   const babyStation = aggregateField("features", "babyStation", "binary");
  //   const cleaningSchedule = aggregateField("features", "cleaningSchedule", "binary");
  //   const genderNeutral = aggregateField("features", "genderNeutral", "binary");
  //   const getOutOfOrder = aggregateField("basicInfo", "outOfOrder", "binary");
  // });  
