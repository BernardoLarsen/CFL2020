import { Item } from "./stock"

export class ItemSold extends Item{
    private idVenta:number;
    public constructor(name:string,price:number,id:number){
        super(name,price);
        this.idVenta=id;
    }
    public getIdVenta():number{
        return this.idVenta;
    }
    public getItemSold():string{
        return this.name;
    }
}

export class Sold{
    private itemsSold:ItemSold[];

    public constructor(itemsSold:ItemSold[]){
        this.itemsSold=itemsSold;
    }

    public GetSold():ItemSold[]{
        return this.itemsSold;
    }
}