'use strict';

const Validator = require('../validator.js')

const schema = {
      firstName: {type: 'string'},
      lastName: {type: 'string'},
      hair: {type: 'object'},
      favoriteFoods: {type: 'array', valueType: 'string'},
      married: {type: 'boolean'},
      kids: {type: 'number'},
  };
  
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;

describe('validator module', () => {
    let validate = new Validator(schema)

    it('check is string', () => {
        expect(validate.isString(str)).toBeTruthy();
        expect(validate.isString(num)).toBeFalsy();
        expect(validate.isString(arr)).toBeFalsy();
        expect(validate.isString(obj)).toBeFalsy();
        expect(validate.isString(func)).toBeFalsy();
        expect(validate.isString(bool)).toBeFalsy();

    });
    it('check is number', () => {
        expect(validate.isNumber(num)).toBeTruthy();

    });
    it('check is boolean', () => {
        expect(validate.isBoolean(bool)).toBeTruthy();

    });
    it('check is object', () => {
        expect(validate.isObj(obj)).toBeTruthy();

    });
    it('check is func', () => {
        expect(validate.isFunc(func)).toBeTruthy();

    });
    it('check is array', () => {
        expect(validate.isArray(arr)).toBeTruthy();

    });
    it('check obj is truthy', () => {
        expect(validate.isTruthy(obj)).toBeTruthy();
        expect(validate.isTruthy()).toBeFalsy();
    });
  
});