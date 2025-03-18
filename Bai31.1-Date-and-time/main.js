//Date time in js
//1. Tạo đối tượng date : sử dụng new Date() để tạo một đối tượng Date mới.
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

//2. Các phương thức lấy thông tin thời gian
//Lấy năm,tháng,ngày,giờ,phút,giây
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

console.log("Năm hiện tại: " + year);
console.log("Tháng hiện tại: " + month);
console.log("Ngày hiện tại: " + day);
console.log("Giờ hiện tại: " + hours);
console.log("Phút hiện tại: " + minute);
console.log("Giây hiện tại: " + second);

//Timestamp là đại diện cụ thể trong thời gian, tính bằng Mốc thời gian 0:
//00:00:00 ngày 1 tháng 1 năm 1970
//Xuất thời gian tại mốc 0
let tinestamp1 = new Date(0);
console.log(tinestamp1);

//Sử dụng getTime(); để lấy timestamp hiện tại
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);
