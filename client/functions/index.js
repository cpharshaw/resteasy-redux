const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log("notification added", doc));
}


// TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS
// TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS
// TRIGGERS --- TRIGGERS --- TRIGGERS --- vvvvvvvv --- TRIGGERS --- TRIGGERS --- TRIGGERS

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
  response.send("Hello, ninjas!");
});


exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(
  (doc) => {
    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
  });

exports.reviewSubmitted = functions.firestore.document('reviews/{reviewID}').onCreate(
  (doc) => {
    return admin.firestore().collection('reviews')
      .where('locationID', 'in', [doc.locationID])
      .where('basicInfo.restroomUsed', 'in', [doc.basicInfo.restroomUsed])
      .get()
      .then(firestoreResponse => {

        const getAvgScore = (scoreName) => {
          const scoreArr = firestoreResponse.map(review => review.scores[`${scoreName}`]);
          const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => runningTotal + reviewScore, 0);
          return (scoreTotal / scoreArr.length);
        };

        const getOutOfOrder = () => {
          const scoreArr = firestoreResponse.map(review => review.scores[`${scoreName}`]);
          const scoreTotal = scoreArr.reduce((runningTotal, reviewScore) => runningTotal + reviewScore, 0);
          return (scoreTotal / scoreArr.length);

          // outOfOrderScenarios_likely = 
          // outOfOrderScenarios_maybe = 
          // inOrderScenarios = no ooo  

        };

        firestoreResponse.forEach(review => {
          const cleanlinessScore = getAvgScore("cleanliness");
          const styleScore = getAvgScore("style");
          const comfortScore = getAvgScore("comfort");
          const safetyScore = getAvgScore("safety");
          const privacyScore = getAvgScore("privacy");
        });




        admin.firestore().collection('places').add(
          placeReview
        );

      })
  }
);


exports.userJoined = functions.auth.user().onCreate(
  (user) => {

    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
      });

  });