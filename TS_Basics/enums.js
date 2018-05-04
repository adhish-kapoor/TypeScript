// enum color{
//     red,green,blue
// };
// let res=color.green;
// console.log(res)
//spread operator
// function func(a:number,b:number){
//     console.log(a+" "+b)
// }
// let arr:number[]=[1,3]
// func(...arr)
function func() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a.join("/"));
}
var arr = [1, 3];
func(1, 2, 3);
