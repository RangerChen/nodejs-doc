/**
 * 断言模块
 */

const assert = require('assert');

/**
 * assert.notDeepEqual(actual,expected[,message]);
 * 测试actual和expected是否不深度相等（第一子结构相等）
 * 相对于equal只能测试原始类型和deepEqual在对象的测试功能不足
 * notDeepEqual刚好填补了其空缺，实现对象第一层级结构的测试
 * 但需要注意的是，非深度相等和深度相等格式互斥的关系，而不是单纯的补充关系
 * 即当两个对象是深度相等的时候，断言他们非深度相等则会抛出 AssertionError
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

// assert.notDeepEqual(obj1,obj1);
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } } 异常

// assert.notDeepEqual(obj1,obj2);
// 通过

// assert.notDeepEqual(obj1,obj3);
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } } 异常

// assert.notDeepEqual(obj1,obj4);
// 通过 因为obj4的字面量为 {} 所以通过

// assert.notDeepEqual(obj1,obj3,'not Deep Equal!');
// 抛出 AssertionError: not Deep Equal! 指定信息异常, message 参数是可选的 如果message为undefined 则输出默认异常信息

/**
 * assert.notDeepStrictEqual(actual,expected[,message])
 * 测试 actual 和 expected 参数是否不深度严格相等
 * 与 assert.deepStrictEqual()相反
 * */

// assert.notDeepEqual({a: 1},{a: '1'});
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' } 异常
// 因为 1 和 '1' 不是严格相等的

// assert.notDeepStrictEqual({a: 1},{a: '1'});
// 通过

// assert.notDeepStrictEqual({a: 1},{a: '2'});
// 通过