# 正则表达式  RegExp对象

## 创建方法
1. var regex = /xyz/;
2. var regex = new RegExp('xyz');

## 修饰符  (i,g,m)
- var regex = /xyz/i;
- var regex = new RegExp('xyz','i');

## 修饰符判断
- var r = /abc/igm;
- r.ignoreCase  // true
- r.global  // true      
- r.multiline  // true

## 搜索下标与字符串形式
- var r = /abc/igm;
- r.lastIndex  // 0
- r.source // 'abc'

# test  (返回布尔值)
## /cat/.test('cats and dogs')  // true

## 带g修饰符
  var r = /x/g;
  var s = '_x_x';
  r.lastIndex //0
  r.test(s)  // true
  r.lastIndex //2
  r.test(s) // true
  r.lastIndex  // 4
  r.test(s)  // false

## while (/a/g.test("babaa"))  count++;  上面代码会无限循环，/a/g 每次都是一个新的正则表达式

## new RegExp('').test('abc')   // true

# exec  (返回数组，或者null)  数组只会返回一项(无论是否带g)
## 简单匹配
  var s = '_x_x';
  var r1 = /x/;
  var r2 = /y/;
  r1.exec(s)  // ["x"]
  r2.exec(s)  // null

## 圆括号(组匹配) 
  var s ="_x_x";
  var r = /_(x)/;
  r.exec(s)  // ["_x", "x"]

## 属性
  input：整个原字符串。
  index：整个模式匹配成功的开始位置（从0开始计数）。
  var r = /a(b+)a/;
  var arr = r.exec('_abbba_aba_');
  arr // ["abbba", "bbb"]
  arr.index // 1
  arr.input // "_abbba_aba_"

# match  (返回一个数组，若带g则返回所有集合的数组)  (不带有g,含有组匹配时，会返回组匹配内容)  (使用g时，组匹配内容无效)

## lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始
## 简单匹配
  var s = '_x_x';
  var r1 = /x/;
  var r2 = /y/;
  s.match(r1) // ["x"]
  s.match(r2) // null

## g修饰符，exec和match对比
  var s = 'abba';
  var r = /a/g;
  s.match(r) // ["a", "a"]
  r.exec(s) // ["a"]

## lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始
  var r = /a|b/g;
  r.lastIndex = 7;
  'xaxb'.match(r)  // ['a', 'b']
  r.lastIndex  // 0

# search  (返回第一个满足条件的匹配结果在整个字符串中的位置，没有配返回-1)
##  简单匹配
  '_x_x'.search(/x/)  // 1

# replace(不加g,只替换第一个匹配成功的值)

## 简单示例
  'aaa'.replace('a', 'b')  //"baa"
  'aaa'.replace(/a/,'b')   // "baa"
  'aaa'.replace(/a/g,'b')  // "bbb"

## 消除字符串两端空格
   var str = '  #id div.class  ';
   str.replace(/^\s+|\s+$/g,"")
   // "#id div.class"
##  $&：匹配的子字符串。
  $`：匹配结果前面的文本。
  $’：匹配结果后面的文本。   一般使用时 写成$\'
  $n：匹配成功的第n组内容，n是从1开始的自然数,(即组匹配内容)。
  $$：指代美元符号$。
## 应用
   'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1') // "world hello"

   'abc'.replace('b', '[$`-$&-$\']') // "a[a-b-c]c"

## replace方法的第二个参数为函数
### 简单应用
  '3 and 5'.replace(/[0-9]+/g, function (match) {
      return 2 * match;
   })
   // "6 and 10"

  var a = 'The quick brown fox jumped over the lazy dog.';
  var pattern = /quick|brown|lazy/ig;
  a.replace(pattern, function replacer(match) {
     return match.toUpperCase();
  });
  // The QUICK BROWN fox jumped over the LAZY dog.

### 组匹配
作为replace方法第二个参数的替换函数，可以接受多个参数。其中，第一个参数是捕捉到的内容，第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）。此外，最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置（比如从第五个位置开始），最后一个参数是原字符串。
 
 var prices = {
  'p1': '$1.99',
  'p2': '$9.99',
  'p3': '$5.00'
};

var template = '<span id="p1"></span>'
  + '<span id="p2"></span>'
  + '<span id="p3"></span>';

template.replace(
  /(<span id=")(.*?)(">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"

# split  (第一个参数为分隔规则，第二个参数为返回数组长度)
## 简单应用
  // 非正则分隔
  'a,  b,c, d'.split(',')
  // [ 'a', '  b', 'c', ' d' ]
  // 正则分隔，去除多余的空格
  'a,  b,c, d'.split(/, */)
  // [ 'a', 'b', 'c', 'd' ]
  // 指定返回数组的最大成员
  'a,  b,c, d'.split(/, */, 2)
  [ 'a', 'b' ]

## 贪婪模式
  // 例一
  'aaa*a*'.split(/a*/)
  // [ '', '*', '*' ]
  // 例二
  'aaa**a*'.split(/a*/)
  // ["", "*", "*", "*"]

## 正则表达式带括号，则括号匹配部分也会作为数组成员返回；
    'aaa*a*'.split(/(a*)/)
    // [ '', 'aaa', '*', 'a', '*' ]

# 匹配规则
（1）点字符（.)
     匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符。
（2）位置字符 
	^ 表示字符串的开始位置
	$ 表示字符串的结束位置
	/^test$/ 表示以test开始，test结尾;
 (3) 选择符 （|）
   /ab|cd/ 指匹配的是ab或cd
   /a(b|c)d/ 指匹配的是abd或acd

# 转义符
## 两种创建方式区分
  /1+1/.test('1+1')
  // false

  /1\+1/.test('1+1')
  // true

### 使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。
- (new RegExp('1\+1')).test('1+1')// false

- (new RegExp('1\\+1')).test('1+1')// true

# 字符类  
- [abc]  表示a、b、c中任选一个匹配(注意是任选一个)
- [^abc]  表示除了a、b、c之外都可以匹配  脱字符（^）
- [a-z123] -连字符

## 简单示例
- /[^abc]/.test('bbc') // false

# 字符意义
- \d 匹配0-9之间的任一数字，相当于[0-9]
- \D 匹配所有0-9以外的字符，相当于[^0-9]
- \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]
- \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]
- \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]
- \S 匹配非空格的字符，相当于[^ \t\r\n\v\f]
- \b 匹配词的边界。
- \B 匹配非词边界，即在词的内部。

# 重复类  {}
 模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。

/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true

# 量词符
- ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
- * 星号表示某个模式出现0次或多次，等同于{0,}。
- + 加号表示某个模式出现1次或多次，等同于{1,}。

## 非贪婪模式
- *?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
- +?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。

# 组匹配 
- /fred+/   结果+只表示重复字母d
- /(fred)+/    结果+表示重复fred这个词

##  \n  (n为数值)   可以表示组匹配(\n代表组匹配中内容)的内容
- /(.)b(.)\1b\2/.test("abcabc") // true
- /y(..)(.)\2\1/.test('yabccab') // true
- /y((..)\2)\1/.test('yabababab') // true

## 非捕获组
- (?:x) 表示不返回该组匹配内容
- var m= "abc".match(/(?:.)b(.)/);     // ["abc","c"]

## 先行断言
- x(?=y) 表示x只有在y前面才会匹配，y不会计入返回结果
- var m="abc".match(/b(?=c)/);     // ["b"]

## 先行否定断言
- x(?!y)  表示x只有不在y前面才匹配，y不会被计入返回结果
- /\d+(?!\.)/.exec('3.14')    // ["14"]
- var m = 'abd'.match(/b(?!c)/);   // ["b"]




   

