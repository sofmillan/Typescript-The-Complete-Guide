class ArrayOfAnything<T>{
    constructor(public items:T[]){}

    get(index:number):T{
        return this.items[index]
    }
}

const arr = new ArrayOfAnything(['a','b','c'])




function printAnything<T>(array:T[]): void{
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printAnything<string>(['a','b']);





class Car{
    print(){
        console.log("This is a car");
    }
}

class House{
    print(){
        console.log("This is a house");
    }
}

interface Printable{
    print():void;
}

function printSomething<T extends Printable>(arr:T[]):void{
   for (let index = 0; index < arr.length; index++) {
    console.log(arr[index].print());
    
   }
}

printSomething<House>([new House(), new House(), new House()])