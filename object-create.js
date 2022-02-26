//1. using object literal
const student ={name:'Sakib Al Hasan', job:'cricketer'};
//2. using object constractor
const person = new Object();

//3. inheritence
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

//4. creating object from class
class People {
    constructor(name, age){
         this.name= name;
         this.age = age;
    }
} 
const peop = new People('Manus', 12);
// console.log(peop);

//5. function (Syntactical Sugar)
function Manus(name){
    this.name = name;
}
const man = new Manus('Kader');
console.log(man);
