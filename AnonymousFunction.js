let x =function(){
  console.log("hello")
}
x();


///immediately invoked functions Expression
 (function exec(){
    console.log("named")
 })();

 (function(x){
    console.log(x*x);
 })