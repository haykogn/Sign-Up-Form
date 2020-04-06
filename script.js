let claimFreeTrial = document.querySelector('.claim-free-trial');
let errorMsg = document.querySelectorAll('.msg');
let exclam = document.querySelectorAll('.exclam');
let inputs = document.querySelectorAll('input');


// Event listener
claimFreeTrial.addEventListener('click', function (e) {
    e.preventDefault();

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' && i != 2) {
            errorMsg[i].innerText = `${inputs[i].getAttribute('placeholder')} cannot be empty`;
            inputs[i].style.border = '2px solid hsl(0, 100%, 74%)';
            exclam[i].style.visibility = 'visible';
        } else if (i == 2 && validateEmail(inputs[i].value) == false) {
            inputs[i].style.border = '2px solid hsl(0, 100%, 74%)';
            exclam[i].style.visibility = 'visible';
            errorMsg[i].innerText = `Looks like this is not an email`;
        } else {
            errorMsg[i].innerText = '';
            inputs[i].style.border = '1px solid hsl(246, 25%, 77%)';
            exclam[i].style.visibility = 'hidden';
        }

    }

})


// Function Validate Email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}