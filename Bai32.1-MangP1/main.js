//Mảng trong js - tổng quan

//Khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
//mảng có phần tử bên trong
let arr2 = [1, 2, 3, 4, "Nam", true, [1, 2, 3]];
console.log(arr2);

// Sử dụng Array và Constructor
let arr3 = new Array();
console.log(arr3);
//mảng có sẵn phần tử bên trong
let arr4 = new Array(1, 2, 3, 4, "mậu");
console.log(arr4);
//Tạo mảng độ dài xác định, phần tử là undefined
let arrayWithLength = new Array(5);
console.log(arrayWithLength);

// Truy xuất phần tử của mảng qua vị trí index
let arr5 = [4, 6, 8, 9];
console.log(arr5[2]);
console.log(arr5[3]);

//Thuộc tính length
console.log(arr5.length);
//gán , thay đổi giá trị cho mảng qua index
let arr6 = [5, 6, 7];
arr6[1] = 7;
console.log(arr6);

//Duyệt mảng
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
//sai khi thay đổi xuất arr7
console.log(arr7);

//for...of ; chỉ có thể xem, không sửa được giá trị của mảng
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  //Kiểm tra điều kiện
  if (element % 2 === 0) {
    console.log(element);
    count++;
  }
  console.log(element);
  element = 5; //gán k đc
}
console.log(arr8);
console.log("số lượng số chẵn có trong mảng: " + count);
