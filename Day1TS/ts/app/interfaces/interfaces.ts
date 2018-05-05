interface pasta{
    sauce:string;
    shape:string;
}

interface quality{
    taste:string;
    price:number;
}

let redPasta:pasta;
let whitePasta:pasta;

function typePasta(pasta:pasta):quality{
    pasta.sauce="white";
    pasta.shape="zig-zag";
    return {taste:"salty",price:100}
}

