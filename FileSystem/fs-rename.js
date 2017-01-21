/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * 路径重命名函数（包含文件和路径，即能对文件和文件夹进行重命名）
 * fs.rename(oldPath,newPath,callback);
 * callback函数只有一个入参，就是可能产生的异常错误
 * 如果rename函数正确执行，error为null，否则error为产生的错误
 * */
/*
fs.rename('./newFile/','./oldFile',function (error) {
    console.log(error);
    console.log('callback function');
});
*/
/**
 * 重命名函数的同步调用版本
 * fs.renameSync(oldPath,newPath)
 * 需要注意的是 同步版本没有函调函数（毕竟是同步方法么）
 * 如果产生错误，则会直接抛出异常，正常执行时，则不抛出任何异常
 * */
fs.renameSync('ori-file.fl','ori-file.fl');