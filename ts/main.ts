/**
 * This function executes after the web page is done loading.
 */
window.onload = function(){
    // validate all form information when user clicks button.
    // cast <HTMLElement> for onclick event.
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

/**
 * Method does not return a value.
 */
function main():void {
    alert("submit button was clicked.");
}