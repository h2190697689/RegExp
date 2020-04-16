 // 实例一  (死循环)
 var count = 0;
 while(/a/g.test('babaa')) count++;

 console.log(count);

// 实例二  （输出3）
 var count = 0;
 var r = /a/g;
 while(r.test('babaa')) count++;

 console.log(count);