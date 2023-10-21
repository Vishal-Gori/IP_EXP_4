// Function to generate the invoice HTML

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from actually submitting
      vaildate();
      openInvoiceWindow(); // Open the invoice in a new window
    });
  }
});

  // Add a submit event listener to the form
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    openInvoiceWindow(); // Open the invoice in a new window
  });
  
  function vaildate(){
    const name = document.getElementById('text_input').value.trim();
    const email = document.getElementById('email_input').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const tagline = document.getElementById('text_input').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color_input').value.trim();
    const file = document.getElementById('file_input').value.trim();
    const budget = document.getElementById('range_input').value.trim();
    const specialRequest = document.getElementById('text_input').value.trim();
    const size = document.getElementById('size').value.trim();
    const quantity = document.getElementById('number_input').value.trim();

    let submits = true
      if(name.length < 2){
      alert("Enter a valid name")
      // submits = false;
      return;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Name should not contain numbers.");
      return;
  }
    if(phone.length != 10 ){
      alert("Number should be of 10 digits");
      return;
    }
    if(phone[0] == 0){
      alert("Number shoulden't start from 0");
      return;
    }
    if(submits === true){
      alert("Form Submitted")
    }
    
    
  }