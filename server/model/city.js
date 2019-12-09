var firebase  = require('C:/Users/Oriah/Desktop/code/js/little_projects/weather-app/node_modules/firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAfbHd-yWZJyl5wkGRv6DaJc4DC7v1faro",
    authDomain: "weather-app-c1bb5.firebaseapp.com",
    databaseURL: "https://weather-app-c1bb5.firebaseio.com",
    projectId: "weather-app-c1bb5",
    storageBucket: "weather-app-c1bb5.appspot.com",
    messagingSenderId: "745615567230",
    appId: "1:745615567230:web:2df254b15cb9ac9e906b2f",
    measurementId: "G-YH6J9ZZV44"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()
    

module.exports = db