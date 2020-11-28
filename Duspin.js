class Duspin 
{
    constructor(x,y,width,height)
    {
        var option1 ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option1)
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        this.x=x
        this.y=y
    }

    display()
    {
        rectMode(CENTER)    

        fill(255,0,0)
        rect(this.x,this.y,this.width,this.height)
    }
}