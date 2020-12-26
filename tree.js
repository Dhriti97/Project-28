class Tree{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/tree.png");
        
    }

    display(){
        imageMode(CENTER);
        image(this.image, 600,400 ,200,400);
    }
}