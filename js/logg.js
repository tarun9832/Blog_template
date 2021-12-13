function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  const name = ["admin", "Tarun", "Suhendu", "prasun", "aryan"];
  const key = ["user", "sunil", "electrical", "mechanical", "computer_science"];
  if (username.trim() == "" || password.trim() == "") {
    alert("No blank values allowed");
    return false;
  } else {
    for (let i = 0; i < 5; i++) {
      if (username == name[i] && password == key[i]) {
        alert("Login succesfull");
        return true;
      } else {
        continue;
      }
    }
    alert("invalid username or password");
    return false;
  }
}
