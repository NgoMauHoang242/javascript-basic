// Ép kiểu dữ liệu
// xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời bạn nhập vào numberA: ");
// Kiểm tra numberA là loại biến jj
console.log(typeof numberA);
//Thử thực hiện tính toán  (nếu chưa ép kiểu )
let numberB = 5;
console.log(typeof numberB);
//Cộng A với B
let kq = numberA + numberB;
console.log(`kết qủa A + B = ${kq}`);
console.log(typeof kq);
//vd a =5 , kq = 55 -> sai , js hiểu là + chuỗi
//các phép tinhs khác
console.log(`A-B = %s`, numberA - numberB);
console.log(`A*B = %s`, numberA * numberB);
console.log(`A/B = %s`, numberA / numberB);
console.log(`A%B = %s`, numberA % numberB);

// xuất thông báo cho người dùng nhập vào số a
let numberC = parseInt(prompt("Mời bạn nhập vào numberC: "));
console.log(numberC);
console.log(typeof numberC);
console.log(numberC + numberB);
//Hoặc dùng hàm number() để ép --> kiểu number
let number = Number(prompt("Mời bạn nhập vào numberD: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD + numberB);
