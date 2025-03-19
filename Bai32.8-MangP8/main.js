/*
CÚ pháp : array.filter(function)

function(currentValue, [currentIndex],[array])
Hàm được gọi với những đối số sau:
currentValue: Giá trị hiện tại đang xử lý trong mảng
currentIndex: (Tùy chọn) Mảng đang được duyệt
array: (Tùy chọn) Mảng đang được duyệt
*/
let numbers = [1, 2, 3, 4, 5];
//Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
  //Function
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);
