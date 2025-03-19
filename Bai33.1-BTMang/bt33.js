//Tạo mảng ngẫu nhiên với n phần tử
function createRanDomArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let randomArray = createRanDomArray(n);

//Xuất các giá trị trong mảng
console.log("===========Mảng ban đầu=============");
console.log(randomArray);
//in ra chuỗi dùng Join
console.log("Mảng: " + randomArray.join(", "));

//Đảo ngược mảng , xuất mảng sau khi đảo ngược
console.log("-----------Mảng sau đảo ngược----------");
let reveredArray = randomArray.slice().reverse();
console.log(reveredArray);

//Sắp xếp tăng dần
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log("--------Mảng sau khi sắp xếp tăng dần -------");
let sortedArray = sortArray([...randomArray]);
console.log(sortedArray);

//Tính tổng các phần tử trong mảng
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log("-------Tổng các pt trong mảng------");
let sumElement = sum(randomArray);
console.log("Tổng : " + sumElement);

// cho người dùng nhập 1 số bất kì, kiểm tra số đó có nằm trong mảng k, có thì xuất ra index.

//Nhập liệu
let searchNum = Number(prompt("Nhập số để kiểm tra: "));
//Dùng for để duyệt mảng theo index và kiểm tra
let indexArr = [];
for (let i = 0; i < randomArray.length; i++) {
  if (searchNum === randomArray[i]) {
    indexArr.push(i);
  }
}
console.log(indexArr);
//kiểm tra nếu mảng rỗng báo không có số tìm kiếm trong mảng
if (indexArr.length === 0) {
  console.log(`Không có số ${searchNum} trong mảng`);
} else {
  console.log(`Số ${searchNum} xuất hiện tại vị trí index: ` + indexArr.join());
}
