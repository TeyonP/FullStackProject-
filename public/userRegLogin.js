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
  fetch("https://still-reef-68703.herokuapp.com/user/registered", {
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
        location.replace("https://still-reef-68703.herokuapp.com/shoppingpage");
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
  fetch("https://still-reef-68703.herokuapp.com/user/login/", {
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
        console.log(location);
        location.replace("https://still-reef-68703.herokuapp.com/shoppingpage");
      } else {
        let el = document.getElementById("login-failed");
        el.classList.toggle("hidden");
      }
      if (data.isLoggedIn && data.isAdmin) {

        location.replace("https://still-reef-68703.herokuapp.com/admin");
      }
    });
});
