class Person{
    //cannot have multiple constructors in a single class
    fistName:string;
    lastName:string;
    greet(){
        console.log("hello");
    }
}
//inheritance
class Programmer extends Person{ 
    greet(){
        console.log("hello world")
    }
    greetLikeNormalPeople(){
        super.greet(); //calling greet() of Person class
    }
}
var aProgrammer=new Programmer(); //instance created
aProgrammer.greetLikeNormalPeople(); //hello world
