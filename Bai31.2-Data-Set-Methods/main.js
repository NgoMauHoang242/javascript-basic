//ĐỊnh dạng và xuất thời gian
//set thời gian theo ý muốn
//cách 1 : new Date (year, monthIndex, day,minutes,second,milisecond)
let myDate1 = new Date(2003, 2, 24);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

//cách 2: new Date (dateString)
let myDate2 = new Date("2024-02-14T12:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

//cách 3: sử dụng setFullYear, setMonth,
let myDate3 = new Date();
myDate3.setFullYear(2003);
myDate3.setMonth(1);
myDate3.setDate(24);
console.log(myDate3);
//Xuất ngày tháng năm
//Xuất dùng phương thức to LocaleDatestring()
console.log(myDate3.toLocaleDateString());

//Xuất ngày tháng năm theo định dạng mong muốn(tự code):
console.log(`
    Ngày ${myDate3.getDate()}/Tháng ${
  myDate3.getMonth() + 1
}/Năm ${myDate3.getFullYear()}
    `);

//Thêm số 0 để xuất ngày tháng dạng 01,02...
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
console.log(`
    Ngày ${prefixDate} ${myDate3.getDate()}/Tháng ${prefixMonth}${
  myDate3.getMonth() + 1
}/Năm ${myDate3.getFullYear()}
    `);
