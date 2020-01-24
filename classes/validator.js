'use strict';

class Validator {
    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.hairType = data.hair.type;
        this.hairColor = data.hair.color;
        this.favoriteFoods = data.favoriteFoods;
        this.married = data.married;
        this.kids = data.kids;
    };
}
    //   function  isTruthy(data) {
    //         console.log(data)
    //         if (input) return true;
    //         else return false;
    //     };
    //    function isCorrectType(data) {
    //         console.log(data)
    //         if (typeof (input.firstName) === 'string') return true;
    //         if (typeof (input.lastName) === 'string') return true;
    //         if (typeof (input.hairType) === 'string') return true;
    //         if (typeof (input.hairColor) === 'string') return true;
    //         if (typeof (input.favoriteFoods) === 'object') return true;
    //         if (typeof (input.married) === 'boolean') return true;
    //         if (typeof (input.kids) === 'number') return true;
    //         else return false;
    //     }
      // {
        //     "firstName": "Fred",
        //     "lastName": "Sample",
        //     "hair": {
        //       "type": "wavy",
        //       "color": "brown"
        //     },
        //     "favoriteFoods": ["pizza","cupcakes","salmon"],
        //     "married": true,
        //     "kids": 3
        //   }
        // }

// /**
//  * Is this a string?
//  * @param input
//  * @returns {boolean}
//  */
// validator.isString = (input) => {
//     return typeof input === 'string';
//   };
//   /**
//    * Is this a number?
//    * @param input
//    * @returns {boolean}
//    */
//   validator.isNumber = (input) => {
//     return typeof input === 'number';
//   };
//   /**
//    * Is this a function?
//    * @param input
//    * @returns {boolean}
//    */
//   validator.isFunc = (input) => {
//     return typeof input === 'function';
//   };
//   /**
//    * Is this a array?
//    * @param input
//    * @returns {boolean}
//    */
//   validator.isArray = (input) => {
//     return Array.isArray(input);
//   };
//   /**
//    * Is this a object?
//    * @param input
//    * @returns {boolean}
//    */
//   validator.isObj = (input) => {
//     return typeof input === 'object';
//   };
//   /**
//    * Is this a boolean?
//    * @param input
//    * @returns {boolean}
//    */
//   validator.isBoolean = (input) => {
//     return typeof input === 'boolean';
//   };




// validator.isValid = (schema, data) => {
//     let valid = true;
//     for (let fieldName in schema.fields) {
//         let field = schema.fields[fieldName];
//         // Am I required and set?
//         let required = field.required ? validator.isTruthy(data[fieldName]) : true;
//         // Am I the right type (if we even care)
//         let type = field.type ? validator.isCorrectType(data[fieldName], field) : true;
//         // If anything is false ...
//         if (!(required && type)) {
//             valid = false;
//         }
//     }
//     return valid;
// };

// const personRules = {
//     fields: {
//         id: { type: 'string', required: true },
//         name: { type: 'string', required: true },
//         age: { type: 'number', required: true },
//         children: { type: 'array', valueType: 'string' },
//     },
// };
// const susan = {
//     id: '123-45-6789',
//     name: 'Susan McDeveloperson',
//     age: 37,
//     children: [],
// };
// const fred = {
//     id: 38,
//     name: 'Freddy McCoder',
//     children: [],
// };
module.exports = Validator;
// console.log(new validator(personRules, susan))
// console.log(new validator(personRules, fred))