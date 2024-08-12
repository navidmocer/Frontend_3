
function logIn_Cheak() {
    var email_Input = document.getElementById('input-email').value;
    var password_Input = document.getElementById('input-password').value;
    var alert_text = document.getElementById('text-alert');
    var box_alert = document.getElementById('box-alert');
    if (email_Input.includes("@") == true && email_Input.includes(".com") && password_Input.length > 7) {
        box_alert.style.visibility = "visible";
        alert_text.innerHTML = "You've successfully logged in";
    }
    else {
        box_alert.style.visibility = "visible";
        alert_text.innerHTML = "Email or password not correct!"
        box_alert.style.backgroundColor = "red";
    }

}