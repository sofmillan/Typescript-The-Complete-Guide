type Callback = () => void;

export class Eventing{
    events: {[key: string]:Callback[] } = {};

    on(eventName: string, callback: Callback):void{
        // || is used to provide a default value if the left-hand expression is falsy
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
    trigger(eventName:string):void{
        const handlers = this.events[eventName];
        if(!handlers || handlers.length===0){
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}