// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeQNTd0qfe7RHtRjp_ej2cSWmq5pfLzSc",
  authDomain: "dsc-vssut-burla.firebaseapp.com",
  databaseURL: "https://dsc-vssut-burla.firebaseio.com",
  projectId: "dsc-vssut-burla",
  storageBucket: "dsc-vssut-burla.appspot.com",
  messagingSenderId: "86708583840",
  appId: "1:86708583840:web:ae199e0180d298f0ea78c5",
  measurementId: "G-9NS9SSKNK6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Initialize firestore
var db = firebase.firestore();

//add addEventListener to the form
document.querySelector('.contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("number").value
  var subject = document.getElementById("subject").value
  var message = document.getElementById("message").value

  // Save message
  saveMessage(fname,lname,phone, email, subject, message);

  // Show alert
  document.getElementById('sendmessage').style.display = 'block';
  document.querySelector('.contactForm').style.display = 'none';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.getElementById('sendmessage').style.display = 'none';
    document.querySelector('.contactForm').style.display = 'block';
  }, 3000);

  // Clear form
  document.querySelector('.contactForm').reset();

}

// Save message to firebase-firestore
function saveMessage(fname,lname,phone, email, subject, message) {
  db.collection("message").add({
      First_name: fname,
      Last_name: lname,
      phone:phone,
      email: email,
      subject: subject,
      message: message
    });
    // .then(function(docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //   console.error("Error adding document: ", error);
    // });
}
