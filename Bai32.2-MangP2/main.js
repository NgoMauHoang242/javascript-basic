//concat : nối mảng hiện tại với mảng khác và trả về 1 mảng mới

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

//push : thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//unshift : thêm 1 hoặc nhiều phần tử vào đầu mảng gốc
let arr5 = [1, 2, 3];
arr5.unshift("Mậu", 0);
console.log(arr5);

//pop  ; loại bỏ phần tử cuối của mảng và trả về phần tử đã bị loại
let arr6 = [1, 2, 3, "C"];
let removeElement = arr6.pop();
console.log(arr6);
console.log(removeElement);

//shift : loại bỏ phần tử đầu tiên trong mảng và trả về phần tử đã bị loại
let arr7 = [1, 2, 3];
let removeElement2 = arr7.shift();
console.log(arr7);
console.log(removeElement2);

//slice (start, end): tạo 1 bản sao của mảng cắt từ start đến end -1
//từ một vị trí bắt đầu đến một vị trí kết thúc (Không bao gồm vị trí kết thúc)
let arr8 = [1, 2, 3, 4, 5];
let sliceArr = arr8.slice(1, 44);
console.log(arr8);
console.log(sliceArr);

//includes: Kiểm tra xem một mảng có chứa giá trị cụ thể hay không
//Trả về true hoặc false
let arr9 = [1, 2, 3, 4, 5, "Mậu"];
let isPresent = arr9.includes("Mậu");
console.log(isPresent);
