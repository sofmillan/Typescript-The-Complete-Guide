import { UserForm } from "./views/UserForm";
const root = document.getElementById('root');
import { User } from "./models/User";
const user = User.buildUser({name:'Hanbin', age:22})

if(root){
    const userForm = new UserForm(root, user);
    userForm.render();
}
