//结尾符$
// var str="afd0test";
// var a = /tast$/.test(str);
// console.log(a);

// 结尾符$
// var str="afd0test";
// var a = /\w(st)$/.test(str);
// console.log(a);


var res= '37 and 5'.replace(/[0-9]+/g, function (match) {
        return 2 * match;
})
console.log(res);