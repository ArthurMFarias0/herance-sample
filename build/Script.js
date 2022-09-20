"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Preto', true, 'Patolino', 2, 30, 5);
function takeoff(animal) {
    animal.fly();
}
function takeoff1(animal) {
    animal.swim();
}
function takeoff2(animal) {
    animal.walk();
}
takeoff(duck);
takeoff1(duck);
takeoff2(duck);
