// Các cách xuất dữ liệu với biến trong js

let soA = 25;
let soB = 5;
//Cách1
console.log("Căn bậc 2 của " + soA + "là: " + soB);
//Cách 2
console.log("Căn bậc 2 của ", soA, "là:", soB);
//Cách 3:
console.log(`Căn bậc hai của ${soA} là:" ${soB}`);
//Cách 4:
console.log(`Căn bậc hai của %s là %s`, soA, soB);
