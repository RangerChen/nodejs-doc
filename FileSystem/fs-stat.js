/**
 * 文件系统模块
 */

const fs = require('fs');

/**
 * stat()
 * fs.stat(path,callback);
 * stat方法的参数是一个文件或目录，他产生一个对象，该对象包含了该文件或该目录的具体信息
 * 我们往往通过该方法，判断正在处理的到底是一个文件，还是一个目录。
 * */

var currentFolder = process.cwd();
console.log(currentFolder);

fs.readdir(currentFolder,function (error, files) {
    if(error) throw error;
    files.forEach(function (file) {
        fs.stat(currentFolder + '/' + file,function (error,stats) {
            if (error) throw error;
            if (stats.isFile()){
                console.log('%s is file',file);
            } else if (stats.isDirectory()){
                console.log('%s is directory',file);
            }
            console.log('stats: %s',JSON.stringify(stats));
        })
    });
});