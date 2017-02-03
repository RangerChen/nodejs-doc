/**
 * 全局对象
 * */

/**
 *
 * cleatInterval(Timeout)
 * 数据类型：函数 Function
 * Timeout有setInterval函数返回
 * */

console.log(clearInterval.toString());

/**
 * 对应源码
 * */
var newClearInterval = function (timer) {
    if (timer && timer._repeat){
        timer._repeat = null;
        clearTimeout(timer);
    }
};