// Regex Patterns
const nameRegex = /^[a-zA-Z ]{3,30}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Toggle password visibility
function togglePassword(id, icon) {
  const input = document.getElementById(id);

  icon.style.transform = "translateY(-50%) rotate(0deg)";
  setTimeout(() => {
    icon.style.transform = "translateY(-50%) rotate(360deg)";
  }, 10);

  if (input.type === "password") {
    input.type = "text";
    icon.innerText = "👁️‍🗨️";
  } else {
    input.type = "password";
    icon.innerText = "👁️";
  }
}

// Forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Smooth form switch
function showForm(hideForm, showForm) {
  hideForm.classList.add("fade-out");
  hideForm.addEventListener("animationend", () => {
    hideForm.style.display = "none";
    hideForm.classList.remove("fade-out");
    
    showForm.style.display = "block";
    showForm.classList.add("fade-in");
    showForm.addEventListener("animationend", () => {
      showForm.classList.remove("fade-in");
    }, { once: true });
  }, { once: true });
}

showSignup.addEventListener("click", () => showForm(loginForm, signupForm));
showLogin.addEventListener("click", () => showForm(signupForm, loginForm));

// Signup validation
signupForm.addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirm = document.getElementById("signupConfirm").value.trim();

  let valid = true;

  if(!nameRegex.test(name)){
    document.getElementById("signupNameError").innerText = "Name must be 3-30 letters";
    valid = false;
  } else { document.getElementById("signupNameError").innerText = ""; }

  if(!emailRegex.test(email)){
    document.getElementById("signupEmailError").innerText = "Invalid email format";
    valid = false;
  } else { document.getElementById("signupEmailError").innerText = ""; }

  if(!passwordRegex.test(password)){
    document.getElementById("signupPasswordError").innerText = "Password must be 8+ chars, include uppercase, lowercase, number, special char";
    valid = false;
  } else { document.getElementById("signupPasswordError").innerText = ""; }

  if(password !== confirm){
    document.getElementById("signupConfirmError").innerText = "Passwords do not match";
    valid = false;
  } else { document.getElementById("signupConfirmError").innerText = ""; }

  if(valid){
    alert("Signup successful!");
    signupForm.reset();
    showForm(signupForm, loginForm);
  }
});

// Login validation
loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  let valid = true;

  if(!emailRegex.test(email)){
    document.getElementById("loginEmailError").innerText = "Invalid email format";
    valid = false;
  } else { document.getElementById("loginEmailError").innerText = ""; }

  if(!passwordRegex.test(password)){
    document.getElementById("loginPasswordError").innerText = "Invalid password format";
    valid = false;
  } else { document.getElementById("loginPasswordError").innerText = ""; }

  if(valid){
    alert("Login successful!");
    loginForm.reset();
  }
});
