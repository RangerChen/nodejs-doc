/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * readdir 用于读取目录，返回一个所包含的文件和子目录的数组
 * fs.readdir(path,callback);
 * 回调函数的第一个参数为错误信息，第二个参数为读取返回的`当前目录下包含文件和子目录（一级）的数组`
 * */
fs.readdir(process.cwd(),function(error,files){
    if (error){
        console.log(error);
        return;
    }
    var count = files.length;
    var result = {};
    files.forEach(function (filename) {
        console.log(filename);
    });
});