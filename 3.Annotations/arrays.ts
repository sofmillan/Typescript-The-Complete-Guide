const carMakers: string[] = ['Ford', 'Toyota','Chevrolet'];

const carsByMake:string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string):string=>{
    return car;
})

const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('10-04-2023')