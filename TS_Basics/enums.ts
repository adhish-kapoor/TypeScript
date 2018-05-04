// enum color{
//     red,green,blue
// };
// let res=color.green;
// console.log(res)


// function func(a:number,b:number){
//     console.log(a+" "+b)
// }
// let arr:number[]=[1,3]
// func(...arr)

//spread operator ...
function func(...a:number[]){
    console.log(a.join("/"))
}
func(1,2,3)