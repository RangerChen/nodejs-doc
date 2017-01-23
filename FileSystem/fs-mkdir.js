/**
 * 文件模块系统
 * */

const fs = require('fs');

/**
 * mkdir 用于创建新目录
 * fs.mkdir(path,permission,callback)
 * 需要注意的是 第二个权限值  这里主要指的是unix系统下的权限值 比如 0777 表示给予所有权限
 * */
fs.mkdir('./mkdir_folder',0777,function(error){
    if (error) throw error;
    console.log('folder created!');
});