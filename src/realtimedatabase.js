const firebase = require("firebase/app");
const firebaseConfig =  require('./firebase_config'); 

require("firebase/database");


firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const usersRef = db.ref('users');

// database LISTEN
usersRef.on('value', function(snapshot) {
   console.log(snapshot.val());
});

// database LISTEN (one time)
usersRef.once('value', function(snapshot) {
    console.log(snapshot.val());
});

//usersRef.off("value"); <===== remove firebase database listener 

// CUSTOM KEY
db.ref("users/10000").set({
    email: "email@email.com",
    key: 1000,
    username: "Test2"
});


// RAMDOM KEY
const enty = db.ref("users").push();
enty.set({
    email: "email@email.com",
    key: enty.getKey(),
    username: "Test3"
});


