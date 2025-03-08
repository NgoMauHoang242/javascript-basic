// Hàm isNaN, Nummber
//Hàm Number (value) --> Chuyển value sang số
// --> Nếu không chuyển được trả về NaN
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Mời nhập vào 1 số : "));
// console.log(so);

let a = "123aa";
console.log(isNaN(a));

let b = Number(true);
console.log(b);
console.log(typeof b);
console.log(isNaN(b));
console.log(Number(null));
console.log(Number(""));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");
console.log(0 / 0);
console.log(Number, NaN);
console.log({});
console.log(Number.isNaN("ponyfoo"));
