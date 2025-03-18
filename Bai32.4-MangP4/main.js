// start: chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
// deleteCount : Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đàu tự vị trí start.
//  Nếu item1, item2, ...: Các phần tử mới sẽ được thêm vào mảng từ vị trí start

//Loại bỏ các phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(2, 2); //Xóa từ vị trí index 2, xóa đi 2 phần tử
arr11.splice(-2, 2); //Xóa từ vị trí index -2 , xóa đi 2 phần tử
console.log(arr11);

//Thay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); //Xóa từ vị trí index 2, xóa đi 1 ký tự
//thêm phần từ 6 từ vị trid index 2;
console.log(arr12);

//thêm phần tử vào mảng
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8, 9);
//xóa 0 phần tử, thêm 6,7,8,9 vào mảng từ vị trí index 2
console.log(arr13);
