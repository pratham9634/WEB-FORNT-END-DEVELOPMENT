// document.getElementById("id name")
// id name.what can they do like onclick and value = function(){}
// To print the result in web page not in console we use
//

const mycheckbox = document.getElementById("mycheckbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("mastercard")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("submit-btn")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")

function handlesubmitclick() {
    if (mycheckbox.checked) {
        subresult.textContent = "You are subscribed";
    } else {
        subresult.textContent = "You are not subscribed";
    }
    if (visa.checked) {
        paymentresult.textContent = "You have selected visa";
    }
    else if (mastercard.checked) {
        paymentresult.textContent = "You have selected mastercard";
    }
    else if (paypal.checked) {
        paymentresult.textContent = "You have selected paypal";
    }

    else {
        paymentresult.textContent = "You have not selected card";
    }

}

submit.onclick = handlesubmitclick;