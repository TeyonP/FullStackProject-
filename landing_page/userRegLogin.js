const userLogin = document.getElementById("userLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginSubmitButton = document.getElementById("btn-submit-login");
const usernameReg = document.getElementById("usernameReg");
const emailReg = document.getElementById("emailReg");
const passwordReg = document.getElementById("passwordReg");
const regSubmitButton = document.querySelector("#btn-submit-reg");

regSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  const newRegisteredUser = {
    username: usernameReg.value,
    email: emailReg.value,
    password: passwordReg.value
  };
  console.log(newRegisteredUser);
  fetch("http://localhost:3000/user/registered", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newRegisteredUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.isRegistered);
      if (data.isRegistered) {
        let el = document.getElementById("registration-success");
        el.classList.toggle("hidden");
        location.replace("../shopping_page/shopping_page.html");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    });
});

loginSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  const userSignin = {
    username: userLogin.value,
    password: passwordLogin.value
  };
  console.log(userSignin);
  fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userSignin)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.isLoggedIn) {
        location.replace("../shopping_page/shopping_page.html");
      } else {
        let el = document.getElementById("login-failed");
        el.classList.toggle("hidden");
      }
      // if (data.isAdmin) {
      //   location.replace("../shopping_page/shopping_page.html");
      //   let el = document.getElementsByClassName("admin-login");
      //   el.classList.toggle("hidden");
      // }
    });
});
