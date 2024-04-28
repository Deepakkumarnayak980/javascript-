let obj ={id:101 ,name:"Alex",salary:1000};
console.log(obj);

let emp= new Object()
emp.id=102;
emp.name= "suna";
emp.salary= 1400;
console.log(emp);

function Emp(i,n,s){
    this.id=i;
    this.name =n;
    this.salary = s;

}
const e =new Emp(103,"maa",500000);
console.log(e);


//
console.log(emp.id);
console.log(emp['name'])


//change the data 
emp.salary=1300000;
console.log(emp);