/*
    Challenge40: Make a Circle with OOP

    Your task is to create a Circle constructor 
    that creates a circle with a radius provided
     by an argument. 
     The circles constructed must have two getters 
     getArea() and getPerimeter() which give both 
     respective areas and perimeter(circumference).
 */

class Circle {

    constructor(radius){
        this.radius = radius
        this.PI = 3.142;
    }

    getArea() {
        return this.PI * (this.radius**2)
    }

    getPerimeter() {
        return 2 * this.PI * this.radius;
    }

}

// //run below code to test

// const circle1 = new Circle(4.44);
// console.log(`Area: ${circle1.getArea()}, Perimeter: ${circle1.getPerimeter()}`);
