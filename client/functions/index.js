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




const createPlaceReview = (dataArr, latestReviewGender) => {

  const placeID = dataArr[0].locationID;
  const placeName = dataArr[0].basicInfo.locationName;

  const gender = latestReviewGender;
  // functions.logger.info("restroomUsed... dataArr[0].basicInfo.restroomUsed ---> ", restroomUsed);

  const mensArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Men's");
  const womensArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Women's");
  const genderNeutralArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Family/Gender-neutral");

  functions.logger.info("mensArr ---> ", mensArr);
  functions.logger.info("womensArr ---> ", womensArr);
  functions.logger.info("genderNeutralArr ---> ", genderNeutralArr);

  const getAvgScore = (scoreName, arr) => {
    const scoreArr = arr.map(review => review.scores[`${scoreName}`]);
    const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => parseInt(runningTotal) + parseInt(reviewScore));
    return parseFloat(scoreTotal / scoreArr.length);
  };

  // const getScoreSum = (scoreName, arr) => {
  //   const scoreArr = arr.map(review => review.scores[`${scoreName}`]);
  //   const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => parseInt(runningTotal) + parseInt(reviewScore));
  //   return scoreTotal;
  // return parseFloat((scoreTotal / scoreArr.length).toFixed(3));
  // };

  const getScoreDenom = (scoreName, arr) => {

    const weight = scoreName === "cleanliness" ? 9 :
      scoreName === "safety" ? 7 :
        scoreName === "privacy" ? 6 :
          scoreName === "comfort" ? 4.5 :
            scoreName === "style" ? 2 : null;

    // const scoreArr = arr.map(review => review.scores[`${scoreName}`]);
    // const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => parseInt(runningTotal) + parseInt(reviewScore));
    return weight;
  };

  const restroomUsedFunc = dataArr => {

    // functions.logger.info("dataArr ---> ", dataArr);

    const cnt = dataArr.length;

    const cleanScoreArr = dataArr.map(review => review.scores.cleanliness);
    const cleanAvg = (cleanScoreArr.reduce((fieldTotal, field) => parseInt(fieldTotal) + parseInt(field)) / cleanScoreArr.length);

    const safetyScoreArr = dataArr.map(review => review.scores.safety);
    const safetyAvg = (safetyScoreArr.reduce((fieldTotal, field) => parseInt(fieldTotal) + parseInt(field)) / safetyScoreArr.length);

    const privacyScoreArr = dataArr.map(review => review.scores.privacy);
    const privacyAvg = (privacyScoreArr.reduce((fieldTotal, field) => parseInt(fieldTotal) + parseInt(field)) / privacyScoreArr.length);

    const comfortScoreArr = dataArr.map(review => review.scores.comfort);
    const comfortAvg = (comfortScoreArr.reduce((fieldTotal, field) => parseInt(fieldTotal) + parseInt(field)) / comfortScoreArr.length);

    const styleScoreArr = dataArr.map(review => review.scores.style);
    const styleAvg = (styleScoreArr.reduce((fieldTotal, field) => parseInt(fieldTotal) + parseInt(field)) / styleScoreArr.length);

    const weightedAvg = parseFloat((((cleanAvg * 9) + (safetyAvg * 7) + (privacyAvg * 6) + (comfortAvg * 4.5) + (styleAvg * 2)) / 28.5));

    const cleaningSchedule = dataArr.map(review => review.features.cleaningSchedule).length >= 3 ? true : false;
    const babyStation = dataArr.map(review => review.features.babyStation).length >= 3 ? true : false;

    const recentReviewsSort = dataArr.sort((x, y) => x.reviewDatatime - y.reviewDatatime);
    const recentReviews = recentReviewsSort.slice(0, 7);

    return {
      cnt: parseInt(cnt),
      cleanAvg: parseFloat(cleanAvg.toFixed(3)),
      safetyAvg: parseFloat(safetyAvg.toFixed(3)),
      privacyAvg: parseFloat(privacyAvg.toFixed(3)),
      comfortAvg: parseFloat(comfortAvg.toFixed(3)),
      styleAvg: parseFloat(styleAvg.toFixed(3)),
      weightedAvg: parseFloat(weightedAvg.toFixed(3)),
      cleaningSchedule: cleaningSchedule,
      babyStation: babyStation,
      recentReviews: recentReviews
    }
  };

  const admissionFreeArrLength = dataArr.filter(review => review.features.admission === "Free").length || 0;
  // functions.logger.info("admissionFreeArrLength ---> ", dataArr.filter(review => review.features.admission === "Free").length);

  const admissionPayArrLength = dataArr.filter(review => review.features.admission === "Pay/Customers-Only").length || 0;
  // functions.logger.info("admissionPayArrLength ---> ",  dataArr.filter(review => review.features.admission === "Pay/Customers-Only").length);

  const admission = admissionPayArrLength > admissionFreeArrLength ? "Pay" : admissionPayArrLength < admissionFreeArrLength ? "Free" : admissionFreeArrLength > 0 ? "Unknown" : "Unknown";
  // functions.logger.info("admissionPayArrLength > admissionFreeArrLength ... 'Pay' ---> ", admissionPayArrLength > admissionFreeArrLength);
  // functions.logger.info("admissionPayArrLength < admissionFreeArrLength ... 'Free' ---> ", admissionPayArrLength < admissionFreeArrLength);
  // functions.logger.info("admissionFreeArrLength > 0 ... 'Unknown' ---> ", admissionFreeArrLength > 0);

  const priceArr = dataArr.map(review => review.features.price);
  const price = (priceArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / priceArr.length);

  const genderNeutral = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.genderNeutral === true).length >= 3 ? true : false;
  const accessible = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.accessible === true).length >= 3 ? true : false;

  const allCnt = parseInt(dataArr.length);


  // const allCleanSum = 1;

  const allCleanAvg = parseFloat(getAvgScore("cleanliness", dataArr));
  const allSafetyAvg = parseFloat(getAvgScore("safety", dataArr));
  const allPrivacyAvg = parseFloat(getAvgScore("privacy", dataArr));
  const allComfortAvg = parseFloat(getAvgScore("comfort", dataArr));
  const allStyleAvg = parseFloat(getAvgScore("style", dataArr));

  const allWeightedAvg = ((allCleanAvg * 9) + (allSafetyAvg * 7) + (allPrivacyAvg * 6) + (allComfortAvg * 4.5) + (allStyleAvg * 2)) / 28.5;
  // const allWeightedAvg = parseFloat((((allCleanAvg * 9) + (allSafetyAvg * 7) + (allPrivacyAvg * 6) + (allComfortAvg * 4.5) + (allStyleAvg * 2)) / 28.5));

  const allRecentReviewsSort = dataArr.sort((x, y) => x.reviewDatatime - y.reviewDatatime);
  const allRecentReviews = allRecentReviewsSort.slice(0, 7);

  const placeReview = {
    placeID: placeID,
    placeName: placeName,

    admission: admission,
    price: parseFloat(price.toFixed(3)),

    genderNeutral: genderNeutral,
    accessible: accessible,

    allCnt: parseInt(allCnt),

    allCleanAvg: parseFloat(allCleanAvg.toFixed(3)),
    allSafetyAvg: parseFloat(allSafetyAvg.toFixed(3)),
    allPrivacyAvg: parseFloat(allPrivacyAvg.toFixed(3)),
    allComfortAvg: parseFloat(allComfortAvg.toFixed(3)),
    allStyleAvg: parseFloat(allStyleAvg.toFixed(3)),
    allWeightedAvg: parseFloat(allWeightedAvg.toFixed(3)),

    allRecentReviews: allRecentReviews,

    mens: mensArr.length > 0 ? restroomUsedFunc(mensArr) : null,
    womens: womensArr.length > 0 ? restroomUsedFunc(womensArr) : null,
    genderNeutral: genderNeutralArr.length > 0 ? restroomUsedFunc(genderNeutralArr) : null
  }

  // gender === "Men's" ? placeReview.mens = restroomUsedFunc(mensArr):
  //   gender === "Women's" ? placeReview.womens = restroomUsedFunc(womensArr) :
  //     gender === "Family/Gender-neutral's" ? placeReview.genderNeutral = restroomUsedFunc(genderNeutralArr) : null

  return admin.firestore().collection('places').doc(placeID).set(placeReview);

  // } else if (gender === "Women's") {
  //   placeReview.restroomUsed(gender, womensArr, restroomUsedFunc);
  //   return admin.firestore().collection('places').doc(placeID).set(placeReview);
  // } else if (gender === "Family/Gender-neutral") {
  //   placeReview.restroomUsed(gender, genderNeutralArr, restroomUsedFunc);
  //   return admin.firestore().collection('places').doc(placeID).set(placeReview);
  // }

  // return admin.firestore().collection('places').doc(placeID).set(finalPlaceReview(mensArr, womensArr, genderNeutralArr));

};



const savePlaceEntry = (locationID, latestReviewGender) => {
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

      // functions.logger.info("fsResponseData.docs.map(review => review.data()) ---> ", fsResponseDataDocsMap);

      return createPlaceReview(fsResponseDataDocsMap, latestReviewGender);

      // return createBaseReviewArr(fsResponseData);

    });
}

exports.reviewSubmitted = functions.firestore.document('reviews/{reviewID}')
  .onWrite(
    QueryDocumentSnapshot => {
      const responseData = QueryDocumentSnapshot.data();
      const locationID = responseData.locationID;
      const latestReviewGender = responseData.basicInfo.restroomUsed;
      // functions.logger.info("Hello QueryDocumentSnapshot response data... ", responseData);
      // functions.logger.info("typeof... ", typeof responseData);

      return savePlaceEntry(locationID, latestReviewGender);

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
