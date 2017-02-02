/**
 * 全局对象
 * */

/**
 *
 * cleatInterval(Timeout)
 * 数据类型：函数 Function
 * Timeout有setInterval函数返回
 * */

console.log(clearTimeout.toString());

/**
 * 对应源码
 * */
var newClearInterval = function (timer) {
    if(timer && (timer[kOnTimeout] || timer._onTimeout)){
        timer[kOnTimeout] = timer._onTimeout = null;
        if (timer instanceof Timeout){
            timer.close(); // for after === 0
        } else {
            unenroll(timer);
        }
    }
};