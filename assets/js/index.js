function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "test@gmail.com" && password == "test") {
    alert("Login successfully");
    return false;
  }
}