//function with parameter

//function declarations
function displayMessage (messageToBeDisplayed){
    console.log(displayMessage)
}
 


function displayMessage(
    massageToBeDisplayed = "i am a produ students of cutm"
){
    console.log(massageToBeDisplayed);
}

// Calling the function with an argument
displayMessage("i am happy to learn javascript");

// Calling the function without an argument (will use the default value)
displayMessage();
