/**
 * 断言模块：该模块提供了一组简单的断言测试集合，用于测试不变量。
 * 该模块是Node.js内部使用的，但可以通过require('assert')在代码中使用。
 * 该模块的API是锁定的，这意味着不会新增或者更改任何由该模块实现与公开的方法。
 */

const assert = require('assert');

/**
 * assert.deepEqual(actual,expected[,message]);
 * 用于测试 actual 和 expected 是否深度相等。
 * 原始类型（即ES的5种原始类型：Undefined、Null、Boolean、Number、String）会使用相等（==）运算符进行比较。
 *
 * 该方法只比较可枚举的自身属性。deepEqual()不测试对象的原型、连接符、或不可枚举属性。
 * 这会引起一些潜在的义燎之外的结果。
 * 比如：不可枚举的对象，并不会抛出AssertionError的异常
 * */

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b: 1
    }
};

const obj4 = Object.create(obj1);

// assert.deepEqual(obj1,obj1);
// 通过，对象与自身相等

// assert(obj1,obj2);
// 通过，两个对象外层属性相同  但当使用深度对比时，两个对象将不通过断言！

// assert.deepEqual(obj1,obj2);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } } 异常

// assert.deepEqual(obj1,obj3);
// 通过，两个对象深度相等

// assert.deepEqual(obj1,obj4);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {} 异常，原型将会被忽略

// assert.deepEqual(obj1,obj4,'object not equal!');
// 当断言的两个对象不相等时，则抛出一个带有message信息的异常，当message为undefined时，则输出默认的异常信息，否则将输出message的输入参数
// 例如 该断言会抛出 AssertionError: object not equal! 异常


/**
 * assert.deepStrictEqual(actual, expected [,message]);
 * 大多数情况下 严格深度相等都和深度相等时一样的，但这里有两个例外：
 * 1、ES提供的原始对象将使用全等符（===）进行比较；
 * 2、对象比较，包含了其原型的比较；
 * */

// assert.deepEqual({a: 1}, {a: '1'});
// 通过  应为  1 == '1' 为 true

// assert.deepStrictEqual({a: 1}, {a: '1'});
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' } 异常 因为 1 === '1' 为false