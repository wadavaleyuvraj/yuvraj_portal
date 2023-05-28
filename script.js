// Example code for displaying a message when the page loads
window.addEventListener('load', function() {
    alert('Welcome to my website!');
  });
  
  // Example code for handling form submission
  var contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    // Validate form inputs
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (emailInput.value.trim() === '') {
      alert('Please enter your email address.');
      return;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    // Send form data to the server (you will need to implement the server-side logic)
    // You can use AJAX or fetch API to make an HTTP request to a server-side script
    // and handle the form data submission and processing.
  
    // Reset the form inputs
    contactForm.reset();
  });
  