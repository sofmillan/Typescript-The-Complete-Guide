const profile = {
    firstName: 'ricky',
    age: 19,
    coords:{
        lat:0,
        lng: 127
    },
    setAge(age:number):void{
        this.age = age;
    }
}


const {age, firstName}: {age:number, firstName:string}= profile;

const {
    coords: {lat,lng}
}: {coords:{lat:number, lng:number} } = profile;