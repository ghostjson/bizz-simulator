import Bizz from './Org/Bizz.js'
import Food from './Environment/Food.js';

let bizz;
let food1;
function setup(){
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent('canvas');
    food1 = new Food(200,200);
    bizz = new Bizz(food1);
    bizz.born(60, 60);

    
}

function draw(){
    background(255);
    food1.create();
    // bizz.findFood();
    bizz.show();



}


window.setup = setup;
window.draw = draw;