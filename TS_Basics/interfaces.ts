interface Person{
    firstName:string;
    lastName:string;

    getFullName():string;
    
}
class Foo implements Person {
    
    fistName: string;
    lastName: string;
   
    getFullName(): string {
       return this.fistName+" "+this.lastName;
    }
}
let aPerson:Person=new Foo();

let someObj={
    firstName:"Test",
    lastName:"Test",
    getFullName :()=>"Test"

};
aPerson=someObj; //duck typing as both having same structure and properties

