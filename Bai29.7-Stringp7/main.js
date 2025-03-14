//startsWith() endsWith
let s30 = "abcdef abccdef";
console.log(s30.startsWith("ab"));

// tìm vị trí index số 1 xem có bắt đầu chuỗi
console.log(s30.startsWith("bc", 1));
// 5.16 string.endsWith(searchValue,[endIndex])
let s31 = "01234567890";
console.log(s31.endsWith("0"));
//endIndex =10, chuỗi được kiểm tra từ index 0 -> 10-1 = 9
console.log(s31.endsWith("9", 10));

//vd
let tenTeptin = "nhac.mp3";
//kiểm tra xem tên tệp tin có kết thúc bằng ".mp3" hay không
if (tenTeptin.endsWith(".mp3")) {
  console.log("Tệp tin là file âm thanh .mp3");
} else {
  console.log("tệp tin không phải là file .mp3");
}
