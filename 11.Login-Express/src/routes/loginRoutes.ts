import { NextFunction, Router } from "express";
import {Request, Response} from 'express';


interface RequestWithBody extends Request{
    body: {[key:string]:string | undefined}
}

const requireAuth = (req: Request, res: Response, next: NextFunction):void  =>{
    if(req.session && req.session.loggedIn){
        next();
    }
    res.status(403);
    res.send('Not permitted');
}

const router = Router();

router.get('/login', (req:Request, res:Response)=>{
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email">
            </div>
             <div>
                <label>Password</label>
                <input name="password" type="password">
            </div>
            <button>Submit</button>
        </form>
        `)
})

router.post('/login', (req:RequestWithBody, res:Response)=>{
    const {email, password} = req.body;

    if(email && password && email==='ricky@gmail.com' && password == '123'){
        req.session = {loggedIn:true};
        res.redirect('/')
    }else{
        res.send('Invalid email or password');
    }
})


router.get('/', (req:Request, res:Response)=>{
    if(req.session && req.session.loggedIn){
        res.send(`
            <div>
            <div>You are logged in</div>
            <a href="/logout">Log out</a>
            </div>
            `)
    }else{
        res.send(`
            <div>
            <div>You are not logged in</div>
            <a href="/login">Log in</a>
            </div>
            `)
    }
})

router.get('/logout', (req:Request, res:Response)=>{
    req.session = undefined;
    res.redirect('/');
})

router.get('/protected', requireAuth, (req:Request, res:Response)=>{
    res.send('Welcome to protected route')
})
export {router};