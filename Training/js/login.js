function Login() {
    // Get the text field element by its ID
    var textField = document.getElementById('nameTextField');
    
    // Get the value of the text field
    var textValue = textField.value;
    
    // Display the value in an alert or console
    // alert('Text field value: ' + textValue);
    return textValue;

    // Alternatively, use console.log
    // console.log('Text field value:', textValue);
}

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
  
//     // Get the username and password values
//     const username = document.getElementById('nameTextField').value;
//     const password = document.getElementById('pwdTextField').value;
  
//     // Simulate credential validation (you would normally do this on the server)
//     const validUsername = 'prince';
//     const validPassword = 'msf@123';
//     let isValid = true;

//     if (username.length < 3) {
//         document.getElementById('usernameError').style.display = 'block';
//         isValid = false;
//       }
    
//       if (password.length < 6) {
//         document.getElementById('passwordError').style.display = 'block';
//         isValid = false;
//       }
    
//     if (username === validUsername && password === validPassword) {
//       // Redirect to the home page if login is successful
//       window.location.href = 'homepage.html';
//     } else {
//       // Show an error message if login fails
//       alert('Invalid username or password');
//     }
//   });



  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username_error');
    const passwordError = document.getElementById('pwd_error');
    var isUserNameValid = false;var isPwdValid = false;

    function validateUsername() {
      const username = usernameInput.value;
      if (username.length < 3) {
        usernameError.innerHTML = "Username must be at least 3 characters long.";
        usernameError.style.display = 'block';
    } else if (username.length > 15) {
        usernameError.innerHTML = "Username must be less than 15 characters long.";
        usernameError.style.display = 'block';
    } else {
        usernameError.innerHTML = "";
        usernameError.style.display = 'none';
        isUserNameValid = true
      }
    }
  
    function validatePassword() {
      const pwd = passwordInput.value;
      if (pwd.length >= 6) {
        passwordError.style.display = 'none';
        isPwdValid = true
      } else {
        pwd_error.innerHTML = "pwd must be at least 5 characters long.";
        isPwdValid = false
        passwordError.style.display = 'block';
      }
    }
  
    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const validUsername = 'user';
      const validPassword = 'password';
  
      if (isUserNameValid && isPwdValid) {
        if (usernameInput.value === validUsername && passwordInput.value === validPassword) {
          // Redirect to the home page if login is successful
          window.location.href = 'homepage.html';
        } else {
          // Show an error message if login fails
          alert('Invalid username or password');
        }
      }
    });
  });