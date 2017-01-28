/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 *
 * */
fs.watchFile('./writeFile.txt',function (current, previous) {
    console.log('previous size is ' + previous.size);
    console.log('current size is ' + current.size);
});