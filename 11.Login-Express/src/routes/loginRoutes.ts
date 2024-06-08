import { Router } from "express";
import {Request, Response} from 'express';

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send(`
        <div>
        <h1>Hi!</h1></div>`)
})

export {router};