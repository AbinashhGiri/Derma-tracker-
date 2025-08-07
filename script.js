function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const msg = document.getElementById('signup-msg');
  
    if (!email || !password) {
      msg.textContent = "Please fill all fields.";
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("dermaUsers")) || [];
    const exists = users.find(user => user.email === email);
  
    if (exists) {
      msg.textContent = "User already exists!";
      return;
    }
  
    users.push({ email, password });
    localStorage.setItem("dermaUsers", JSON.stringify(users));
    msg.style.color = "green";
    msg.textContent = "Account created! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
  
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const msg = document.getElementById('login-msg');
  
    let users = JSON.parse(localStorage.getItem("dermaUsers")) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      msg.style.color = "green";
      msg.textContent = "Login successful!";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      msg.textContent = "Invalid credentials.";
    }
  }
  