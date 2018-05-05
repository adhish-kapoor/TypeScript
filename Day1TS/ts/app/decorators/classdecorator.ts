function modifyOrnaments(constructor){
    console.log(constructor)  //[Function:christmasTree]
}
@modifyOrnaments  //decorator
class christmasTree{
    ornaments:string;
    constructor(){
        this.ornaments='red';
    }

}
let tree=new christmasTree();
console.log(tree)              //christmasTree{ornaments:'red'}
