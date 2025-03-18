//indexOf: trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy
let arr10 = [1, 2, 3, 4, 5, 6, 7];
let indexElement = arr10.indexOf(5);
console.log(indexElement);

//lastIndexOf trả về vị trí index của phần tử xuất hiện lần cuối trong mảng nếu tìm thấy.
//Trả về -1 nếu không tìm thấy
let lastIndex = arr10.lastIndexOf(3);
console.log(lastIndex);

//reverse : đảo ngược thứ tự của các phần tử trong mảng gốc
//Nó thay đổi mảng gốc và không tạo ra mảng mới
let arr11 = [1, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);

//lưu ý : reverse làm thay đổi mảng gốc
//nếu muốn giữ nguyên bản gốc , hãy reverse trên bản sao
let arr12 = [1, 2, 3, 4, 9];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

//join
//array.join(separator); Nối các mảng thành chuỗi, theo ký tự phân tách 'separator'
//bỏ trống separator mặc định dấu ,
//Không thay đổ mảng gốc

//Không truyền separator
let arr14 = ["mậu", "ngôn", 3, 4, 5];
let string1 = arr14.join();
console.log(string1);
console.log(typeof string1);

//Có truyền separator
let arr15 = ["mậu ", "Ngôn", 1, 2, 3];
let string2 = arr15.join("%");
console.log(string2);
