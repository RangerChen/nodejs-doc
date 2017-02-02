/**
 * 全局对象
 * */

/**
 * setImmediate setTimeout setInterval 这三个方法都会返回一个预定的定时器对象 Timeout
 * 该对象可以用于取消当前正在进行的函数的开关
 * */
var Timeout = {
    _called: false,
    _idleTimeout: 200,
    _idlePrev: {
        TimersList:{
            _idleNext: [Circular],
            _idlePrev: [Circular],
            _timer: {
                '0': [Function],
                _list: [Circular]
            },
            _unrefed: false,
            mescs: 200
        }
    },
    _idleNext: {
        TimersList: {
            _idleNext: [Circular],
            _idlePrev: [Circular],
            _timer: {
                '0': [Function],
                _list: [Circular]
            },
            _unrefed: false,
            mescs: 200
        }
    },
    _idleStart: 65,
    _onTimeout: [Function],
    _timerArgs: undefined,
    _repeat: null
};
