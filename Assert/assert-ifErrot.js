/**
 * 断言模块
 */

const assert = require('assert');

/**
 * assert.ifError(value);
 * 当value的值为false时，通过检测
 * 如果value为true，抛出value
 * 常用于测试回调函数 error 参数
 * */

// assert.ifError(0);
// 通过 因为0为false

// assert.ifError(1);
// 抛出 1