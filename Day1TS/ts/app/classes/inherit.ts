class box{
    candies:string[]=[];

    constructor(item:string){
        this.candies.push(item)
    }
}

class smallbox extends box{
    constructor(candies:string){
        super(candies)
    }
}