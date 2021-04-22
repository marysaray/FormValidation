/**
 * This function is enabled when web page is done loading.
 */
window.onload = function(){
    // validate all form information when user clicks button.
    // cast <HTMLElement> for onclick event.
    let formBtn = 
        <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}
/**
 * This method does not return a value.
 * same structure: both labels have an <input id="">
 * and span directly after <input type="text"> siblingElement.
 */
function main():void {
    console.log("submit button was clicked.");  
    isTextValid("first-name", "First Name is required!");
    isTextValid("last-name", "Last Name is required!");     
}
/**
 * This function will validate any input box.
 * takes in two parameters,
 * @param id <input type="text">
 * @param errMsg error message will be displayed in the sibling-span of the textbox.
 * @returns true if there is a value or text in the <input type="text">
 */
function isTextValid(id:string, errMsg:string):boolean {
    let textBox =
        // get value from the box, cast <HTMLInputElement>.
        <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    // input is an empty string.
    if (textBoxValue == "") {
        let errSpan =
            // can cast <HTMLElement> || <HTMLSpanElement>
            <HTMLElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}