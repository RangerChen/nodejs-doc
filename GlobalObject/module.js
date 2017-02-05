/**
 * 全局对象
 * */

/**
 * 一个当前模块的引用
 * 模块可以通过 require() 来进行引入
 * */
console.log(module);

var Module = {
    id: '.',
    exports: {},
    parent: null,
    filename: '/Users/Ranger.Chen/front-side/nodejs_doc/GlobalObject/module.js',
    loaded: false,
    children: [],
    paths: ['/Users/Ranger.Chen/front-side/nodejs_doc/GlobalObject/node_modules',
        '/Users/Ranger.Chen/front-side/nodejs_doc/node_modules',
        '/Users/Ranger.Chen/front-side/node_modules',
        '/Users/Ranger.Chen/node_modules',
        '/Users/node_modules',
        '/node_modules']
};
