//string.trim(); loại bỏ khoảng trắng ở 2 đầu chuỗi

let s11 = "     He     lo    ";
console.log(s11.length);
let s12 = s11.trim();
console.log(s12);
console.log(s12.length);

//string.trimEnd(); loại bỏ khoảng trắng ở cuối chuỗi
let s13 = "   He    lo     ";
let s14 = s13.trimEnd();
console.log(s14);

//string.trimStart() loại bỏ các khoảng trắng ở đầu chuỗi
let s15 = "   He    lo     ";
let s16 = s15.trimStart();
console.log(s16);
