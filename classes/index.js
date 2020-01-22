'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const vehicleClass = require('./vehicle-class');

const mercedes = new vehicleClass.Car('Mercedes-Benz');
console.log(mercedes.name, mercedes.drive(), mercedes.stop());

const cruisers = new VehicleConstructor.Motorcycle('Cruisers');
console.log(cruisers.name, cruisers.wheelie(), cruisers.stop());




