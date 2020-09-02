import * as fs from "fs";
import { Item } from "./stock";
import { Stock } from "./stock";
import { ItemSold } from "./sold";
import { Sold } from "./sold";

let listaItems:string=fs.readFileSync("items.txt", "utf-8");
let array:string[]=listaItems.split("\r\n");
let arrayItems:Item[]=[];
interface kioksoInterface{
    fillArrayItems(array:string[]):Item[];
    sell():void;
    getStock():Stock;
    getSold():Sold;
}
class Kiosk implements kioksoInterface{
    private stock:Stock;
    private sold:Sold;

    public constructor(stock:Stock,sold:Sold){
        this.stock=stock;
        this.sold=sold;
    }

    public fillArrayItems(array:string[]):Item[]{
        for(let i:number=0;i<array.length;i++){
            let cadena:any[]=array[i].split(",");
            let name:string=cadena[0];
            let price:number=cadena[1];
            arrayItems.push(new Item(name,price));
        }
        return arrayItems;
    }
    public sell():void{
        let elementSold:ItemSold=new ItemSold(arrayItems[0].getName(),arrayItems[0].getPrice(),1);
        let elementSold2:ItemSold=new ItemSold(arrayItems[1].getName(),arrayItems[1].getPrice(),2);
        itemsSold.push(elementSold,elementSold2);
        arrayItems.splice(0,2);
    }
    public getStock():Stock{
        return this.stock;
    }
    public getSold():Sold{
        return this.sold
    }
}

let stock:Stock= new Stock(arrayItems);
let itemsSold:ItemSold[]=[];
let sold:Sold=new Sold(itemsSold);
let kiosk:Kiosk= new Kiosk(stock,sold);
kiosk.fillArrayItems(array);
kiosk.sell();

function convert(obj:Item):string{
    let text: string[]=[];
    for(const [key,value] of Object.entries(obj)){
        text.push(value);
    }
    return text.join(',');
}
function convertArrays(array:Item[]):string[]{
    let items: string[]=[];
    for(let i:number=0;i<array.length;i++){
        let item: string= convert(array[i]);
        items.push(item);
    }
    return items;
}
function updateTextSell(){
    let buffer:Buffer= Buffer.from(convertArrays(sold.GetSold()).join('\r\n'));
    fs.writeFile('itemsSold.txt',buffer, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
updateTextSell();