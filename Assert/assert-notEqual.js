/**
 * 断言模块
 */

const assert = require('assert');

/**
 * assert.notEqual(actual,expected[,message])
 * 使用不等运算符（!=）来测试actual和expected是否不相等
 * 注意 message 参数是可选的
 * */

// assert.notEqual(1,2);
// 通过

// assert.notEqual(1,1);
// 抛出 AssertionError: 1 != 1 异常

// assert.notEqual(1,'1');
// 抛出 AssertionError: 1 != '1' 异常

/**
 * assert.notStrictEqual(actual,expected[,message])
 * */

// assert.notStrictEqual(1,2);
// 通过

// assert.notStrictEqual(1,1);
// 抛出 AssertionError: 1 !== 1 异常

// assert.notStrictEqual(1,'1');
// 通过