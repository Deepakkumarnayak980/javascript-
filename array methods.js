let arr =[1,5,6,7,8]
//push() methods ----to add one or more than the elements to the end of an array//

//arr.push(3);// one 
arr.push(10,4,0) //more
console.log(arr);


//pop() ---- remove the last/end  elements 
arr.pop(0);
console.log(arr)

//shift() ---- remove the first elements 
arr.shift()
console.log(arr)


//unshift() ---- add the first elements 
arr.unshift();
console.log(arr);

//concat() ---- add the two/more array 
 let a =[1,2,3,4,5]
 let b =[6,7,8]
 let c=a.concat(b);
 console.log(c)


 //join()-- used to all the elements of n array into the string

let s =c.join ("@")
console.log(s)

//reverse()--- used the reverse order the elements
c.reverse()
console.log(c)

//slice()--- used the elements between the first elements to last elements
//arr.slice ( start end)
let arr1 =[1,2,3,4,5,6]
console.log(arr1.slice(2,5))


//splice()--- used this method remove the elements and the add the new elements

arr1.splice(2,3,11)
console.log(arr1)