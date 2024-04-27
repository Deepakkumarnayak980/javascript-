function greet() {
    console.log("hii am deepak");
    console.log("how are you");
}

function sqr(X) { // X -> parameter
    //console.log(X*X)
    return X * X;
}

greet();
let a = sqr(8); // 8 - argument
console.log(a);



///function Declarations

function sayMessage(){
    console.log("i am happy to learn the javascript")
}
    //calling a functions
   sayMessage();
   sayMessage();
   sayMessage();
   sayMessage();
   


   ///functions returning value
//Deeclarations
function passMessage(){
    return "i am happy to complited this course"

}

//calling a functions

let message = passMessage();

console.log(message);