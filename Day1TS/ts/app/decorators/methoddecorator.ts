function writable(value:boolean){
    return function(target,name,descriptor){  //name is name of function on which decorator is applied
        descriptor.writable=value;            
    }
   
}


class fruitshop{
    name:string;
    price:number;

    constructor(name:string){
        this.name=name;
        this.price=20;
    }
    @writable(false)
    buy(){
        this.price=30;
    }
}
let fruit=new fruitshop('apple');

fruit.buy=function(){
    fruit.price=50
}

fruit.buy();
console.log(fruit.price)
