import { User } from "./models/User";

const u = new User({});

console.log(u.get("name"));
u.set({name:'Hao'});