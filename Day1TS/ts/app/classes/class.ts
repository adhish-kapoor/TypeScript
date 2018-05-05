class Person{
    Name:string

    constructor(name:string){
        this.Name=name
    }
}
let person1=new Person("Adhish")
console.log(person1)

//classes
class shoppingCart{
    items:string[]=[];

    buy(item:string){
        this.items.push(item);
    }
}
let mobile=new shoppingCart();
mobile.buy('iphone');

console.log(mobile.items) //iphone

let tv=new shoppingCart();
console.log(tv.items); //[]

function todoList(){

}
//prototype
todoList.prototype={
    items:[]=[]
}
let todo1=new todoList();
todo1.items.push("homework");

let todo2=new todoList();
console.log(todo2.items); //homework
