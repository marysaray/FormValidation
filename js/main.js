window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    console.log("submit button was clicked.");
    isTextValid("first-name", "First Name is required!");
    isTextValid("last-name", "Last Name is required!");
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
