// firebaseFunctions.js

// Your web app's Firebase configuration
var firebaseConfig = {
    //your credentials
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function signup() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Signed up 
        var user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);
      });
  }
  