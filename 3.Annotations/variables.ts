const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

let now: Date = new Date();

let colors: string[] = ['Red', 'Green', 'Blue'];

let point: {x:number, y:number} = {
    x:127, 
    y:4419
}

function logNumber(i:number):void{
    console.log(i);
}

const logNumber2: (a:number) => void = (i:number) =>{
    console.log(i);
}

const json = '{"x":10,"y":20}';
const coordinate = JSON.parse(json);
console.log(coordinate); //type any


const coordinate2: {x:number, y:number} = JSON.parse(json);
console.log(coordinate2); //type {x: number;y: number;}
