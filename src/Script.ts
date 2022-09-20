import { Duck } from "./Duck"
import { ICanFly } from "./ICanFly"
import { ICanSwim } from "./ICanswim"
import { ICanWalk } from "./ICanWalk"

const duck = new Duck('Preto', true, 'Patolino', 2, 30, 5)

function takeoff(animal : ICanFly) {
    animal.fly()
}
function takeoff1(animal : ICanSwim) {
    animal.swim()
}
function takeoff2(animal : ICanWalk) {
    animal.walk()
}

takeoff(duck);
takeoff1(duck)
takeoff2(duck)
