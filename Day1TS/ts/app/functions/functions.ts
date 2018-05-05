function hello(n:number,r:string):string{
    return "Adhish"
}
let res=hello(2,"3")
console.log(res)

let car:{model:number,seats:number,year?:number};

car={
    model:1,
    seats:4,
    //year:2018 --optional parameter
}

function myCar(car:{name:string,type:string}){

}
let obj1={
    name:"swift",
    type:"VXI",
    engine:"1000cc"
}
myCar(obj1)

interface xyz{
    name?:string,
    price?:number

}

function fruits(arg1:string,arg2:string, ...arg3:string[]){
    console.log(arg1); //mango
    arg3.forEach((i)=>{
        console.log(i); //papaya orange
    })
}
fruits('mango','apple','papaya','orange')