// Import Firebase Authentication
import { auth } from './firebaseConfig.js';

// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Sign in with email and password
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('Logged in as:', user.email);
    })
    .catch((error) => {
      // Handle login errors
      console.error('Login error:', error.message);
    });
});