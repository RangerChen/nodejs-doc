/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * readFile() 用于异步读取数据
 * fs.readFile(path,callback)
 * path为读取文件的路径
 * */
fs.readFile('./ori-file.fl',function (error, buffer) {
   if(error) throw error;
   console.log(buffer);
});