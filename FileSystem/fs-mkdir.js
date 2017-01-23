/**
 * 文件模块系统
 * */

const fs = require('fs');

/**
 * mkdir 用于创建新目录
 * fs.mkdir(path,permission,callback)
 * */
fs.mkdir('./mkdir_folder',0777,function(error){
    if (error) throw error;
    console.log('folder created!');
});