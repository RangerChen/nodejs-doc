/**
 * 文件模块系统
 * */

const fs = require('fs');

/**
 * writeFile 异步写入文件
 * fs.writeFile(uri,content[,encoding],callback)
 * 注意  这里的编码是可选的 且写入的文件是覆盖的（会清空文件原有的内容！）
 * */
fs.writeFile('writeFile.txt','writeFile content','utf-8',function (error) {
   if(error) throw error;
   console.log('file saved!');
});

/**
 * writeFileSync 同步写入文件
 * fs.writeFileSync(uri,content[,encoding]);
 *
 * */
var content = 'sync write file!';
fs.writeFileSync('writeFile.txt',content,'utf-8');