import triangle from "./triangle"
import Rectangle from "./rectangle"
class Main{
    static display(shape){
        //console.log('Area of '+shape.constructor.name+' is '+shape.calulateArea())
        console.log(`Area of ${shape.constructor.name} is ${shape.calulateArea()}`)
    }
}
Main.display(new Rectangle(23.4,34.5))
Main.display(new triangle(23.4,34.5))