const Caesar = require('../algorythms/caesar.js');
const { expect } = require('@jest/globals');
const actual = '1234567890?!@#$()_+-&^%{}][/\\| абвгґджзклмнпрстфхцчшщаеєиіїоуюяАБВГҐДЖЗКЛМНПРСТФХЦЧШЩАЕЄИІЇОУЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

it("Should shift for 1 only letters from ukr and eng languages", () => {
    const expectValue = '1234567890?!@#$()_+-&^%{}][/\\| бвгґдезилмнорстухцчшщьбєжіїйпфяаБВГҐДЕЗИЛМНОРСТУХЦЧШЩЬБЄЖІЇЙПФЯАbcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA';
    expect(Caesar.encrypt(actual, 1)).toBe(expectValue);
});

it("Should shift for 32 only letters from ukr and eng languages", () => {
    const expectValue = '1234567890?!@#$()_+-&^%{}][/\\| яабвгґєжйклмопрсуфхцчшядезиінтьюЯАБВГҐЄЖЙКЛМОПРСУФХЦЧШЯДЕЗИІНТЬЮghijklmnopqrstuvwxyzabcdefGHIJKLMNOPQRSTUVWXYZABCDEF';
    expect(Caesar.encrypt(actual, 32)).toBe(expectValue);
});
