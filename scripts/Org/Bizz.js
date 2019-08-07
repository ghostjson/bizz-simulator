export default class Bizz{

    constructor(food){
        this.speed = 0.8; //speed
        this.food = food;
        this.color = color(0,0,255);
    }
    born(x=random(0, width), y=random(0, height)){
        this.position = createVector(x,y)
    }

    move(x,y){

        if(this.position.x <= 10){
            this.position.add(createVector(12,0));
        }else if(this.position.x >= width-20){
            this.position.add(createVector(-12,0));
        }else if(this.position.y <= 10){
            this.position.add(createVector(0,12));
        }else if(this.position.y >= height-20){
            this.position.add(createVector(0,-12));
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
            moveTowardsFood();
        }else{
            this.randomMotion();
        }

        // console.log(this.position.dist(this.food.position));

        // console.log(this.food.position.toString())
    }

    foodAware(){
        let distance = this.position.dist(this.food.position);

        // console.log(distance);

        if(distance < 150){
            return true;
        }

    }

    moveTowardsFood(){
        
    }

    randomMotion(){
        let directionX = random([0,1,-1]);
        let directionY = random([0,1,-1]);
        this.move(directionX * 4, directionY * 4);
    }

}