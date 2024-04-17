import { User } from "./User";
import { Company } from "./Compay";

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(elementId:string){
        this.googleMap = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
            zoom: 1,
            center: {
                lat:0,
                lng:0
            }
        });
    }

    addUserMarker(user: User){
        new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
    }

    addCompanyMarker(company:Company){

    }
}