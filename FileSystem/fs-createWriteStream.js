/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * createWriteStream 创建一个写入流对象
 * 该对象的write方法用于写入数据，end方法用于结束写入操作
 * createWriteStream(path[,option])
 * */
var out = fs.createWriteStream('writeStreamFile.txt',{flags: 'a',encoding: 'utf-8'});

out.write('first line\n');
out.write('second line\n');
out.end();