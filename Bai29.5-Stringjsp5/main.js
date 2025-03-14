//string.replace(oldValue, newValue);

let s14 = "học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));

//Để thay thế toàn bộ dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/học/g, "ngủ"));

//string.repeat(count);
/*
count: số lần lặp lại chuỗi
*/
let s23 = "Hello, ";
let s24 = s23.repeat(3);
console.log(s24);
