let emp ={
    id:101,
    name:"deepak",
    Age:24
};
let keys =Object.keys(emp)
console.log(keys);

let values =Object.values(emp)
console.log(values);


let entries =Object.entries(emp);
console.log(entries);
//
//Object.freeze(emp)//not changes
Object.seal(emp)//its changes
emp.id=100
console.log(emp)
