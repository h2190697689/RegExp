// 去除所有空格
// var str = "  c hejjm gf  ";
// var relStr = str.replace(/ /g,"");
// console.log(relStr);


// 去除两端空格
// var str = "  c hejjm gf  ";
// var relStr = str.replace(/^ +| +$/g,"");
// console.log(relStr);

// $匹配的使用
// var a ='abdfjdksjf'.replace(/j(\w)/g,'$1');
var a = 'abdfjdksjf'.replace(/j(\w)/,'$`$1$\'');  // abdfabdfdksjfksjf
console.log(a);