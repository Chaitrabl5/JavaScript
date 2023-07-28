import Shape from './shape' 
export default class Rectangle extends Shape{
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