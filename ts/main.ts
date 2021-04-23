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
    resetErrorMessages(); 
    isTextValid("first-name", "First Name is required!");
    isTextValid("last-name", "Last Name is required!"); 
    checkDateFormat();
}
/**
 * This function validates the date format.
 */
function checkDateFormat():void {
    let dobTextBox =
        // cast for <input> property for value.
        <HTMLInputElement>document.getElementById("dob");
    let dob = dobTextBox.value;
    if (!isValidDate(dob)) {
        // error message
        let errSpan = dobTextBox.nextElementSibling;
        errSpan.innerHTML = "Format ex: mm/dd/yyyy.";
        // one line of code.
        // dobTextBox.nextElementSibling.innerHTML= "Format ex: mm/dd/yyyy";
    }
}
/**
 * This function validates date format.
 * mm/dd/yyyy
 * m/d/yyyy
 * @param input 
 * @returns 
 */
function isValidDate(input:string):boolean{
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
/**
 * This function resets all the span
 * back to the custom default setting.
 */
function resetErrorMessages():void{
    // get all the spans in the form.
    let allSpans = document.querySelectorAll("form span");
    // goes through all the spans.
    for(let i = 0; i < allSpans.length; i++){
        // checks each individual span.
        let currSpan =
            // to use property cast <HTMLElement>
            <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")){
            // clear messages revert to custom format.
            currSpan.innerText = "*";
        }
        else{
            // not required is blank.
            currSpan.innerText = "";
        }
    }
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