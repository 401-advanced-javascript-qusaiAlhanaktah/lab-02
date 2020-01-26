'use strict';

class Vehicle {
    constructor(name, wheels){
        this.name = name;
        this.wheels = wheels;
    }

    drive(){
        return 'Moving Forward';
    }
    stop(){
        return 'Stopping';
    }
}
    class Car extends Vehicle{
        constructor(name, wheels){
            super(name,4)
        }
        // run(){
        //     super.drive();
        //     super.stop();
        // }
    }
    class Motorcycle extends Vehicle{
        constructor(name,wheels){
            super(name, 2)
        }
        wheelie(){
            return 'Wheee!';
        }
        // run(){
        //     super.drive();
        //     super.stop();
        // }
    }


module.exports = {Car,Motorcycle};