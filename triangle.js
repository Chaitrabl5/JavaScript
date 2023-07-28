import Shape from "./shape"
export default class triangle extends Shape{
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