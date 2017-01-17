/**
 * 断言模块
 */

const assert = require('assert');

/**
 * assert.fail(actual,expected,message,operator);
 * 抛出AssertionError
 * 需要注意的是，这里的message为必须参数，如果想输出原始异常信息，传入 undefined 即可
 * 最后一个参数为操作符
 * */

// TODO assert.fail(actual,expected,message,operator);