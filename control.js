let formLogin = document.getElementById("formLogin");
let txt_username = document.getElementById("txt_username");
let txt_password = document.getElementById("txt_password");
let txt_email = document.getElementById("txt_email");
let toasts = document.getElementById("toasts");
let posError = 10;

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  let toast = document.querySelectorAll(".toast__container");
  for (let i = 0; i < toast.length; i++) {
    if (toast[i]) toast[i].remove();
  }
  posError = 10;
  let flag = false;
  if (!validEmail(txt_email.value)) {
    flag = true;
    errorToast("Email Not Vaild Please Check again");
  }
  if (!validUsername(txt_username.value)) {
    flag = true;
    errorToast("Username Not Vaild Please Check again");
  }

  if (!validPassword(txt_password.value)) {
    flag = true;
    errorToast(`
    Password Not Vaild Please Check again <br>
    total character 8 <br>
    at least 1 capital character <br>
    at least 1 digital  <br>
    at least 1 small character <br>
    `);
  }
  if (!flag) {
    alert(`
    Username : ${txt_username.value}\n
    Email : ${txt_email.value}\n
    
    `);
    window.location = event.currentTarget.href;
  }
});

function validEmail(email) {
  var regx = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
  return regx.test(email);
}
function validUsername(username) {
  var regx = /^(?=.{4,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/;
  return regx.test(username);
}
function validPassword(pass) {
  var regx = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
  return regx.test(pass);
}

// to use Error Toast
function errorToast(errorMsg) {
  let id = Math.random();
  let errorToast = `
<div class="toast__container" id="${id}">
    <div class="toast__cell">
        <div class="toast toast--red">
            <div class="toast__icon"></div>
            <div class="toast__content">
                <p class="toast__message">${errorMsg}</p>
            </div>
        </div>
    </div>
</div>

`;
  document.body.insertAdjacentHTML("beforeend", errorToast);
  let pos = document.getElementById(`${id}`).style;
  pos.top = `${posError}px`;
  posError += 70;
  setTimeout(() => {
    let toast = document.getElementById(`${id}`);
    if (toast) toast.remove();
  }, 2800);
}
//to use Error Toast
