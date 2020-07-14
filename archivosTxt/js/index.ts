import * as fs from 'fs';
let texto: string = fs.readFileSync("text.txt", "utf-8");
let arrayTexto: string[]= texto.split(" ");
console.log(arrayTexto);
