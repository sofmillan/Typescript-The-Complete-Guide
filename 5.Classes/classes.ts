//Blueprint to create an object

class Vehicle{
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    // constructor(public color:string) {}

    protected honk():void{
        console.log('beep');
    }
}

class Car extends Vehicle{

    constructor(public wheels:number, color:string) {
        super(color)
    }

    private drive():void {
        console.log('vroom');
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}

const vehicle = new Car(2, 'red');
vehicle.startDrivingProcess();
console.log(vehicle.color);
