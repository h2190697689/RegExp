/** 
*  这是一份正则表达式的练习
*/

/** 备注
*  | 符号既可以放在()中，也可以放在[]中
*  []只会选择其中一个，不管是否使用 |
*  转义字符包括: ^ . [ $ (  ) | * + ? {  \\
*  
*/ 


/* 匹配中文*/   
// var str = "我是一个帅气对的男孩";
// var reg = /^[\u4E00-\u9FFF]+$/;
// console.log(reg.test(str));

/* 匹配双字节字符(包括汉字) YES*/ 
// var str ="匹配双字节字符";
// var reg = /[^\x00-\xff]/;
// console.log(str.search(reg));

/* 验证search的组匹配 YES*/
// var str = "abcbac";
// var reg = /.(b)./g;
// console.log(str.search(reg));

/* 手机验证前三位 */
// var str="14780000000";
// var reg=/^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|16[4]|18[0-9])\d{8}$/;
// console.log(reg.test(str));

/* 手机号验证前两位 YES*/
// var str ="15000000000";
// var reg =/^1[34578]\d{9}$/;  /*  /^1[3-9]\d{9}$/ */
// console.log(reg.test(str));

/* IP地址 */ 
// var str="20.20.26.20";
// var reg=/^((2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)$/;
// console.log(reg.test(str));

/* 邮箱验证 YES*/
// var str="1-2.3@163.com";
// var reg=/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
// var reg= /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-])+(\.[a-zA-Z_-]+)+$/;  
// var reg= /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;  /* 允许汉字 */
// console.log(reg.test(str));

/* 匹配URL */
// var str="http://www.imooc.com";
// var reg=/https?://\w*/;
var reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-@?^=%&\/~+#])?$/;
// console.log(reg.test(str));

/* 匹配腾讯QQ号 YES*/
// var str ="88881234";
// var reg=/[1-9][0-9]{4,}/;     /* /^[1-9]\d{4,12}$/ */
// console.log(reg.test(str));

/* 匹配中国邮政编码 */  
// var str ="881234";
// var reg=/[1-9]\d{5}/

/* 匹配18位身份证 YES*/
// var str="33056219690128511X";
// var reg=/^\d{17}[0-9X]$/   /* /^\d{17}[0-9|X]$/ 也可以*/
// console.log(reg.test(str));

/* 匹配年月日 YES*/
// var str="2018-02-6";
// var reg=/^[1-9]\d{0,3}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/;
// console.log(reg.test(str));

/* 匹配四位验证码 YES*/
// var str="454f";
// var reg=/[\da-zA-Z]{4}/    /* /[0-9a-zA-Z]{4}/ */
// console.log(reg.test(str));

/* []的尝试 YES*/
// var str=6;
// var reg=/[1-36]/;
// console.log(reg.test(str));

/* 贪婪模式检验 YES*/  /* kk的出现,使正则从匹配到第一个字符，直到kk*/
// var str="nmaaaaakk";
// var reg=/(a+?)kk/;
// console.log(str.match(reg))

/* /的检测 */
var reg=/([^]+)\/\/([^]+)/;
var str="http://name.com";
console.log(reg.exec(str));







