const Shape=class Shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calulateArea(){ return 0.0 }
}

class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)
    }
    calulateArea(){
        return this.width*this.height
    }
    toString(){
        return 'Rectangle'
    }
}

class triangle extends Shape{
    constructor(width,height){
        super(width,height)
    }
    calulateArea(){
        return .5*this.width*this.height
    }
    toString(){
        return 'Triangle'
    }
}

class Main{
    static display(shape){
        //console.log('Area of '+shape.constructor.name+' is '+shape.calulateArea())
        console.log(`Area of ${shape.constructor.name} is ${shape.calulateArea()}`)
    }
}
Main.display(new Rectangle(23.4,34.5))
Main.display(new triangle(23.4,34.5))