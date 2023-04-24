const XOR = require('@algorythms/xor.js');
const { expect } = require('@jest/globals');

it("Should encrypt XOR, should return empty when word equals gamma", () => {
    const expectValue = "\x00\x00\x00\x00\x00";
    const actualValue = XOR.encryptASCII("maria", "maria");
    expect(actualValue).toEqual(expectValue);
});

it("Should encrypt XOR", () => {
    const actualValue = 'masha';
    const expectValue = '\x00\x00\x01\x01\x00';
    expect(XOR.encryptASCII(actualValue, "maria").toString()).toBe(expectValue);
});

it("Should decrypt XOR", () => {
    const actualValue = '\x00\x00\x01\x01\x00';
    const expectValue = 'masha';
    expect(XOR.encryptASCII(actualValue, "maria")).toBe(expectValue);
});
