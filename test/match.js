var r = /a|b/g;
r.lastIndex = 7;
console.log('xaxb'.match(r)) // ['a', 'b']
console.log(r.lastIndex) // 0