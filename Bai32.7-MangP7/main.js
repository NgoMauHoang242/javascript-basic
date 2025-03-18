//Tính toán và trả về một giá trị duy nhất sau tính toán

//reduce(function, [initialValue])
//1 function : Một hàm để thực thi cho từng phần tử trong mảng
//2 initialValue: Giá trị khởi tạo

//Bài toán khi không dùng reduce()
let M1 = [1, 2, 3];
//tính tổng các phần tử trong mảng
//Giá trị khởi tạo ban đầu
let sum = 0;
for (let element of M1) {
  sum += element;
}
console.log("Tổng các phần tử trong mảng " + sum);
//Khi dùng reduce()
let sum2 = M1.reduce(
  //Tham số thứ 1: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  //Tham số thứ 2: initialValue
  0
);
console.log(sum2);

//Rút gọn lại
let sum3 = M1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum3);
