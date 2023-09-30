document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can perform form validation here
        // For a simple example, we'll just display the submitted values
        alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);

        try {
          fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Permintaan gagal dengan status: ' + response.status);
            }
            return response.json();
          })
          .then(data => {
            // Handle the response from the backend (e.g., display a success message)
            alert(data.message);
          })
          .catch(error => {
            // Handle errors, such as network errors or server errors
            console.error('Fetch error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi nanti1.');
          });
        } catch (error) {
          console.error('Fetch error:', error);
          alert('Terjadi kesalahan. Silakan coba lagi nanti.');
        }
      });
    });
