'use strict';

const validator = require('../validator.js')


function isTruthy(input) {
    if ((input.firstName) && (input.lastName) && (input.hairType) && (input.hairColor) && (input.favoriteFoods) && (input.married) && (input.married) && (input.kids)) return true;
    else return false;
};
function isCorrectType(input) {
    if (typeof (input.firstName) === 'string' && typeof (input.lastName) === 'string' && typeof (input.hairType) === 'string' && typeof (input.hairColor) === 'string' && typeof (input.favoriteFoods) === 'object' && typeof (input.married) === 'boolean' && typeof (input.married) === 'boolean' && typeof (input.kids) === 'number') return true;
    else return false;

}
function type(input) {
    if (typeof (input.firstName) === 'string') return 'string';
    if (typeof (input.lastName) === 'string') return 'string';
    if (typeof (input.hairType) === 'string') return 'string';
    if (typeof (input.hairColor) === 'string') return 'string';
    if (typeof (input.favoriteFoods) === 'object') return 'object';
    if (typeof (input.married) === 'boolean') return 'boolean';
    if (typeof (input.kids) === 'number') return 'number';
    else return undefined;
}

describe('validator module', () => {
    let person = require('../../validator/data/data.json')
    let validate = new validator(person)

    it('check if the data insert is the same with what should be data type is', () => {
        expect(isCorrectType(validate)).toBeTruthy();

    });
    it('check if all the data insert is  all the data what should be exist', () => {
        expect(isTruthy(validate)).toBeTruthy();
    });
  
});