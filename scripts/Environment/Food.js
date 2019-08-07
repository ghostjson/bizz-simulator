export default class Food{
    constructor(x,y){
        this.position = createVector(x,y)
    }

    create(){
        fill(0,255,0);
        noStroke();
        ellipse(this.position.x,this.position.y, 10, 10);

    }


}