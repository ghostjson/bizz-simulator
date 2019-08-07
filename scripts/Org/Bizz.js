export default class Bizz{

    constructor(food){
        this.speed = 3; //speed
        this.food = food;
        this.color = color(0,0,255);
    }
    born(x=random(0, width), y=random(0, height)){
        this.position = createVector(x,y)
    }

    move(x,y){

        if(this.position.x <= 10){
            this.position.add(createVector(20,0));
        }else if(this.position.x >= width-20){
            this.position.add(createVector(-20,0));
        }else if(this.position.y <= 10){
            this.position.add(createVector(0,20));
        }else if(this.position.y >= height-20){
            this.position.add(createVector(0,-20));
        }else{
            this.position.add(this.speed * x, this.speed * y);
        }

    }

    show(){
        fill(this.color);
        noStroke();
        ellipse(this.position.x,this.position.y,20,20);

        if(this.foodAware()){
            this.color = color('yellow');
            this.moveTowardsFood(this.food);
        }else{
            this.randomWalk();
        }

    }

    foodAware(){
        let distance = this.position.dist(this.food.position);

        if(distance < 150){
            return true;
        }

    }

    moveTowardsFood(){
      console.log(this.food)
    }

    randomWalk(){

        let rand = floor(random(4));


        switch (rand) {
          case 0:
            this.position.x += this.speed;
            break;
          case 1:
            this.position.x -= this.speed;
            break;
          case 2:
            this.position.y += this.speed;
            break;
          case 3:
          this.position.y -= this.speed;
            break;
        }
    }

}
