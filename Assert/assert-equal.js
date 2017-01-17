/**
 * 断言模块
 */

const assert = require('assert');

/**
 * assert.equal(actual,expected[,message]);
 * 使用相等符（==）来测试actual和expected是否相等
 * */

// assert.equal(1,1);
// 通过 因为 1 == 1 为 true

// assert.equal(1,'1');
// 通过 因为 1 == '1' 为true

// assert.equal({a: {b: 1}},{a: {b: 1}});
// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } } 异常
// 因为equal使用的是（==）操作符，此时比较的是两个字面量对象的内存地址，所以不通过