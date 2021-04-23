window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    console.log("submit button was clicked.");
    resetErrorMessages();
    isTextValid("first-name", "First Name is required!");
    isTextValid("last-name", "Last Name is required!");
    var dobTextBox = document.getElementById("dob");
    var dob = dobTextBox.value;
    if (!isValidDate(dob)) {
        var errSpan = dobTextBox.nextElementSibling;
        errSpan.innerHTML = "Format ex: mm/dd/yyyy.";
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextValid(id, errMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errSpan = textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
