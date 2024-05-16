import { User } from "./models/User";

const u = new User({name:"Ricky", age:20});

console.log(u.get("name"));