/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * createReadStream 方法旺旺用于打开大型的文本文件
 * 创建一个读取操作的数据流
 * */

function readLines(input, func) {
    var remaining = '';

    // 文件未读取到末尾
    input.on('data',function(data){

        remaining += data;
        var index = remaining.indexOf('\n');
        var last = 0;
        while(index > -1){
            var line = remaining.substring(last,index);
            last = index + 1;
            func(line);
            index = remaining.indexOf('\n',last);
        }
        remaining = remaining.substring(last);
    });

    // 读取到未见末尾
    input.on('end',function () {

        if (remaining.length > 0){
            func(remaining);
        }
    })
}

function func(data) {
    console.log('Line: ' + data);
}

var input = fs.createReadStream('./mkdir_folder/stream1.txt');

readLines(input,func);
