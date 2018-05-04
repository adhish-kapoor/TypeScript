var fn=()=>'response' //typescript syntax using arrow operator

var a:number=10;
var b:boolean;
b=true

//tuple
var t :[number,string]=[1,'hi'] //different data types

//implicit type in functions
function greet2():string{ 
    return "Good"
}
var greeting; //type any
greeting=greet2()
greeting=45 //type any
console.log(greeting)// 45

//Union types
var x:number | boolean; //can take only number or boolean 
x=10;
x=true;




