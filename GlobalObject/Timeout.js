/**
 * 全局对象
 * */

/**
 * setImmediate setTimeout setInterval 这三个方法都会返回一个预定的定时器对象 Timeout
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
