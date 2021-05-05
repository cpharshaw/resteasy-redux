const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);



// TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS
// TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS
// TRIGGERS --- TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS --- TRIGGERS


const createPlaceReview = (dataArr, latestReviewGender, command, locationID) => {

  if (command === "delete" && !dataArr[0]) {
    return admin.firestore().collection('places').doc(locationID).set({});
  }

  const placeID = dataArr[0].locationID;
  const placeName = dataArr[0].basicInfo.locationName;

  // const gender = latestReviewGender;

  const allArr = dataArr;
  const mensArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Men's");
  const womensArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Women's");
  const genderNeutralArr = dataArr.filter(review => review.basicInfo.restroomUsed === "Family/Gender-neutral");

  // const getAvgScore = (scoreName, arr) => {
  //   const scoreArr = arr.map(review => review.scores[`${scoreName}`]);
  //   const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => parseInt(runningTotal) + parseInt(reviewScore));
  //   return parseFloat(scoreTotal / scoreArr.length);
  // };


  const restroomUsedFunc = dataArr => {

    const placeID = dataArr[0].locationID;
    const placeName = dataArr[0].basicInfo.locationName;

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

    const genderNeutral = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.genderNeutral === true).length >= 3 ? true : false;
    const accessible = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.accessible === true).length >= 3 ? true : false;    
    const admissionFreeArrLength = dataArr.filter(review => review.features.admission === "Free").length || 0;
    const admissionPayArrLength = dataArr.filter(review => review.features.admission === "Pay/Customers-Only").length || 0;    
    const admission = admissionPayArrLength > admissionFreeArrLength ? "Pay" : admissionPayArrLength < admissionFreeArrLength ? "Free" : admissionFreeArrLength > 0 ? "Unknown" : "Unknown";
    const priceArr = dataArr.map(review => review.features.price);
    const price = (priceArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / priceArr.length);

    return {
      // cnt: parseInt(cnt),
      // cleanAvg: parseFloat(cleanAvg.toFixed(3)),
      // safetyAvg: parseFloat(safetyAvg.toFixed(3)),
      // privacyAvg: parseFloat(privacyAvg.toFixed(3)),
      // comfortAvg: parseFloat(comfortAvg.toFixed(3)),
      // styleAvg: parseFloat(styleAvg.toFixed(3)),
      // weightedAvg: parseFloat(weightedAvg.toFixed(3)),
      // cleaningSchedule: cleaningSchedule,
      // babyStation: babyStation,
      // recentReviews: recentReviews,

      placeID: dataArr[0].locationID,
      placeName: dataArr[0].basicInfo.locationName,
      cnt: parseInt(cnt),
      weightedAvg: parseFloat(weightedAvg.toFixed(3)),
      privacyAvg: parseFloat(privacyAvg.toFixed(3)),
      cleanAvg: parseFloat(cleanAvg.toFixed(3)),
      styleAvg: parseFloat(styleAvg.toFixed(3)),
      comfortAvg: parseFloat(comfortAvg.toFixed(3)),
      safetyAvg: parseFloat(safetyAvg.toFixed(3)),
      babyStation: babyStation,
      cleaningSchedule: cleaningSchedule,
      accessible: accessible,
      admission: admission,
      price: price,
      genderNeutral: genderNeutral,
      outOfOrder: false, //placeholder, not calculated yet
      recentReviews: recentReviews,
    }
  };

  // const admissionFreeArrLength = dataArr.filter(review => review.features.admission === "Free").length || 0;
  // const admissionPayArrLength = dataArr.filter(review => review.features.admission === "Pay/Customers-Only").length || 0;

  // const admission = admissionPayArrLength > admissionFreeArrLength ? "Pay" : admissionPayArrLength < admissionFreeArrLength ? "Free" : admissionFreeArrLength > 0 ? "Unknown" : "Unknown";

  // const priceArr = dataArr.map(review => review.features.price);
  // const price = (priceArr.reduce((fieldTotal, field) => fieldTotal + field, 0) / priceArr.length);

  // const genderNeutral = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.genderNeutral === true).length >= 3 ? true : false;
  // const accessible = dataArr.length < 3 ? "TBD" : dataArr.filter(review => review.features.accessible === true).length >= 3 ? true : false;

  // const allCnt = parseInt(dataArr.length);

  // const allCleanAvg = parseFloat(getAvgScore("cleanliness", dataArr));
  // const allSafetyAvg = parseFloat(getAvgScore("safety", dataArr));
  // const allPrivacyAvg = parseFloat(getAvgScore("privacy", dataArr));
  // const allComfortAvg = parseFloat(getAvgScore("comfort", dataArr));
  // const allStyleAvg = parseFloat(getAvgScore("style", dataArr));

  // const allWeightedAvg = ((allCleanAvg * 9) + (allSafetyAvg * 7) + (allPrivacyAvg * 6) + (allComfortAvg * 4.5) + (allStyleAvg * 2)) / 28.5;

  // const allRecentReviewsSort = dataArr.sort((x, y) => x.reviewDatatime - y.reviewDatatime);
  // const allRecentReviews = allRecentReviewsSort.slice(0, 7);

  const placeReview = {
    placeID: dataArr[0].locationID,
    placeName: dataArr[0].basicInfo.locationNam,
    // admission: admission,
    // price: parseFloat(price.toFixed(3)),
    // genderNeutral: genderNeutral,
    // accessible: accessible,
    // allCnt: parseInt(allCnt),
    // allCleanAvg: parseFloat(allCleanAvg.toFixed(3)),
    // allSafetyAvg: parseFloat(allSafetyAvg.toFixed(3)),
    // allPrivacyAvg: parseFloat(allPrivacyAvg.toFixed(3)),
    // allComfortAvg: parseFloat(allComfortAvg.toFixed(3)),
    // allStyleAvg: parseFloat(allStyleAvg.toFixed(3)),
    // allWeightedAvg: parseFloat(allWeightedAvg.toFixed(3)),
    // allRecentReviews: allRecentReviews,

    all: restroomUsedFunc(allArr),
    mens: mensArr.length > 0 ? restroomUsedFunc(mensArr) : null,
    womens: womensArr.length > 0 ? restroomUsedFunc(womensArr) : null,
    genderNeutral: genderNeutralArr.length > 0 ? restroomUsedFunc(genderNeutralArr) : null
  }

  return admin.firestore().collection('places').doc(placeID).set(placeReview);

};



const savePlaceEntry = (locationID, latestReviewGender, command) => {
  functions.logger.info("Inside savePlaceEntry; ; locationID ---> ", locationID, "; latestReviewGender ---> ", latestReviewGender);

  return admin.firestore().collection('reviews')
    .where('locationID', '==', locationID)
    .get()
    .then(fsResponseData => {

      const fsResponseDataDocsMap = fsResponseData.docs.map(review => review.data());

      functions.logger.info("fsResponseDataDocsMap ---> ", fsResponseDataDocsMap)

      return createPlaceReview(fsResponseDataDocsMap, latestReviewGender, command, locationID);

    });
}

exports.reviewDeleted = functions.firestore.document('reviews/{reviewID}')
  .onDelete((snapshot, context) => {
    const responseData = snapshot.data()
    const locationID = responseData.locationID;
    const latestReviewGender = responseData.basicInfo.restroomUsed;
    
    functions.logger.info("onDelete, responseData ---> ", responseData);
    functions.logger.info("onDelete, context ---> ", context);
    functions.logger.info("onDelete, locationID ---> ", locationID);
    return savePlaceEntry(locationID, latestReviewGender, "delete");
  })


exports.reviewSubmitted = functions.firestore.document('reviews/{reviewID}')
  .onCreate((snapshot, context) => {
    const responseData = snapshot.data();
    const placeID = context.params.reviewID;

    const locationID = responseData.locationID;
    const latestReviewGender = responseData.basicInfo.restroomUsed;
    functions.logger.info("onWrite, responseData ---> ", responseData);
    functions.logger.info("onWrite, placeID ---> ", placeID);

    return savePlaceEntry(locationID, latestReviewGender);

  });


exports.reviewEditted = functions.firestore.document('reviews/{reviewID}')
  .onUpdate((change, context) => {

    const before = change.before;
    const after = change.after;

    const beforeData = before.data();
    const afterData = after.data();

    functions.logger.info("onUpdate, beforeData ---> ", beforeData);
    functions.logger.info("onUpdate, afterData ---> ", afterData);
    functions.logger.info("onUpdate, context ---> ", context);

    const placeID = context.params.reviewID;
    const latestReviewGender = beforeData.basicInfo.restroomUsed;
    const locationID = beforeData.locationID;

    functions.logger.info("onUpdate, locationID ---> ", locationID);
    functions.logger.info("onUpdate, latestReviewGender ---> ", latestReviewGender);

    return savePlaceEntry(locationID, latestReviewGender);

  });



