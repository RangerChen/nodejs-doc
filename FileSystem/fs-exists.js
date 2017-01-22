/**
 * 文件模块系统
 * */

const fs = require('fs');

/**
 * exists 判断给定路径是否存在
 * fs.exists(path,callback);
 * path采用严格匹配的模式 比如 文件名为 exists.txt 则'exists'是匹配不到的
 * 这里比较特殊的是 回调函数的第一个参数不是错误对象
 * 需要注意的是，不要在 open 方法之前调用 exists 方法，open 方法本身就能检查文件是否存在
 * */
fs.exists('writeFile.txt',function(exists){
    console.log(exists);
});