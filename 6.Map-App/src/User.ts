import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name: string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    color: string = 'red';
   

    markerContent():string{
        return this.name
    }
}
