/**
 * 全局对象
 * */

/**
 * 全局命名空间对象
 * 在浏览器当中，全局的顶级命名空间为global 但是浏览器并不显式的呈现global对象 而是通过window对象来当做全局对象来使用
 * 但是在nodejs的运行环境当中，全局对象就是global
 * */
console.log(global);