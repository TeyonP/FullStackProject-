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
});

loginSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  const userSignin = {
    username: userLogin.value,
    password: passwordLogin.value
  };
  console.log(userSignin);
});
