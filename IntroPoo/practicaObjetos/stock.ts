export class Item{
    protected name:string;//nombre
    protected price:number;//precio

    public constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    public getName():string{
        return this.name;
    }
    public getPrice():number{
        return this.price;
    }
    public setPrice(newPrice:number):void{
        this.price=newPrice;
    }
}

export class Stock{
    private items:Item[]=[];

    public constructor(items:Item[]){
        this.items=items;
    }
    public getItems():Item[]{
        return this.items;
    }
}