/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * readFile() 用于异步读取数据
 * fs.readFile(path,callback)
 * path为读取文件的路径，可以是相对路径，也可以是绝对路径
 * callback为读取完成后的回调函数，回调函数的第一个参数为发生错误时的错误对象
 * 注意下列代码中的buffer 默认输出的是缓存的二级制数据，如果需要看到明文内容，可以使用buffer的toString()方法
 * */
fs.readFile('./ori-file.fl',function (error, buffer) {
   if(error) throw error;
   console.log(buffer.toString());
});

/**
 * readFileSync()用于同步读取一个文件，返回一个字符串
 * */

/*var text = fs.readFileSync('./ori-file.fl','utf-8');
console.log(text);*/