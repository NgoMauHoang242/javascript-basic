//indexOf, lastIndexOf, includes
//tìm kiếm (searchValue)
//fromIndex(tùy chọn)

let s25 = "abcdef abcdef";
let s26 = s25.indexOf("dd");
console.log(s26);

console.log(s25.indexOf("c", 3));
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);

//lastIndexOf(searchValue, endIndex);
console.log(s25.lastIndexOf("a", 7));
console.log(s25.lastIndexOf("a", 6));

//string.includes(search,[fromIndex])
console.log(s25.includes("a"));
console.log(s25.includes("g"));
//tìm a bd từ vị trí số 8
console.log(s25.includes("a", 8));
