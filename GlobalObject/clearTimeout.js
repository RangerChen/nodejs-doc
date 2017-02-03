/**
 * 全局对象
 * */

/**
 *
 * cleatTimeout(Timeout)
 * 数据类型：函数 Function
 * Timeout有setTimeout函数返回
 * */

console.log(clearTimeout.toString());

var newClearTimeout = function (timer) {
    if(timer && (timer[kOnTimeout] || timer._onTimeout)){
        timer[kOnTimeout] = timer._onTimeout = null;
        if (timer instanceof Timeout){
            timer.close(); // for after === 0
        } else {
            unenroll(timer);
        }
    }
};