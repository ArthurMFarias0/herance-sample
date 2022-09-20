import { Animal } from "./Animal";

abstract class Bird extends Animal {
    public canFly : boolean;

    constructor (canFly : boolean, name : string, lifeTime : number, size : number, weight : number) {
        super(name, lifeTime, size, weight)
        this.canFly = canFly
    }
}

export { Bird }

