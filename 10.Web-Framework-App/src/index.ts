import { User } from "./models/User";

const user = new User({name: 'Ricky', age:20});

user.on('change', ()=>{
    
})