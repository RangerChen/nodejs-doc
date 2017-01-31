/**
 * 全局对象
 * */

/**
 * clearImmediate(Timeout)
 * 数据类型：函数 Function
 * 清楚一个立即运行函数的引用
 * 前提是，配合setImmediate来使用
 * setImmediate()函数会返回一个Timeout对象（需要注意的是，所有的setXx返回的都是一个Timeout对象，而不是一个id）
 * */

console.log(clearImmediate.toString());

/**
 * 对应源码
 * */
var newCleatImmediate = function (immediate) {
    if(!immediate) return;

    immediate._onImmediate = null;

    immediateQueue.remove(immediate);

    if(!immediateQueue.head){
        process._needImmediateCallback = false;
    }
};