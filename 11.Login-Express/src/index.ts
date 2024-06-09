import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from "body-parser";

const app = express();

//without this parser the body property of the request would be undefined
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});