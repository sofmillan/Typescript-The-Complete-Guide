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