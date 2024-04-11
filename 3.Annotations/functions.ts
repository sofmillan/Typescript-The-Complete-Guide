const add = (a:number, b:number):number =>{
    return a + b;
}

function subtract(a:number, b:number):number{
    return a-b;
}

const multiply = function(a:number, b:number):number{
    return a * b;
}

const logger = (message:string) =>{
    console.log(message);
}

//never -> at some point we are going to throw an error 
//and exit the function without returning any value
const throwError = (message:string):never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

//Destructuring
const logWeather = ({date, weather}:{date:Date, weather: string}): void =>{
    console.log(date);
    console.log(weather);
}