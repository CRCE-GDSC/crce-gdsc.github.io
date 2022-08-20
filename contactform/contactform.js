
//add addEventListener to the form
document.querySelector('.contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

 // document.getElementById("contactForm").reset();
  
  //document.querySelector('.contactForm').reset();

}

// function myResetFunction() {
//   document.getElementById("contactForm").reset();
// }

// Alert some text when the form is reset
function myAlertFunction() {
  //alert("Thank you for contacting us! <br/>");
  swal("Thank You for Contacting Us", "We'll get back to you soon!", "success");
}



