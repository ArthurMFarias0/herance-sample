import { Bird } from "./Birds";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanswim";
import { ICanWalk } from "./ICanWalk";

class Duck extends Bird implements ICanWalk, ICanFly, ICanSwim { 
    public color : string

    constructor (color : string, canFly : boolean, name : string, lifeTime : number, size : number, weight : number){
        super(canFly,name,lifeTime,size,weight)
        this.color = color
    }

    public fly(): void {
        console.log(`${this.name} starts to fly!`);
    }
    public swim(): void {
        console.log(`${this.name} starts to swim!`);        
    }
    public walk(): void {
        console.log(`${this.name} starts  tto walk!`);
    }
}

export { Duck };