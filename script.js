// Get the contact form that sends data to SheetDB
const form = document.getElementById('sheetdb-form');

// Only attach the submit handler if the form exists on the page
if (form) {
  form.addEventListener('submit', (e) => {
    // Stop the browser from doing the default full-page form submit
    e.preventDefault();

    // Send the form data to the SheetDB endpoint using Fetch API
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('✅ Submitted! Thank you, we will reach out to you soon.');
        form.reset(); // Clear form fields after successful submit
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('❌ Something went wrong. Please try again later.');
      });
  });
}

// Handle mobile navigation menu toggle (hamburger button)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu');

// Toggle the "open" class on the nav menu when the hamburger is clicked
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
