var form = document.getElementById('sheetdb-form');

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => response.json())
    .then(data => {
        alert('✅ Submitted! Thank you, we will reach out to you soon.');
        form.reset(); // clear form fields
    })
    .catch(error => {
        console.error('Error:', error);
        alert('❌ Something went wrong. Please try again later.');
    });
});
