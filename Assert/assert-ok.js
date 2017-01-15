/**
 * 断言模块：该模块提供了一组简单的断言测试集合，用于测试不变量。
 * 该模块是Node.js内部使用的，但可以通过require('assert')在代码中使用。
 * 该模块的API是锁定的，这意味着不会新增或者更改任何由该模块实现与公开的方法。
 */

const assert = require('assert');

/**
 * assert(value[,message]);
 * 该API是 assert.ok() 的别名
 * */

// assert(true);
// 通过  控制台将什么都不显示

// assert(1);
// 通过  控制台将什么都不显示

// assert(false);
// 抛出 AssertionError: false == true 异常

// assert(0);
// 抛出 AssertionError: 0 == true 异常

// assert(false, 'it\'s false');
// 抛出 AssertionError: it's false 异常
