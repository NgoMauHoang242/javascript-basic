//sử dụng const thay vì let và var
//vd

let person = {
  name: "mậu",
  age: 100,
};
person = 5; //gán lại được và đổi giá trị được

//Để tránh mất giá trị do let --> dùng const
const person1 = {
  name: "mậu",
  age: 100,
};
//Thêm sửa xóa bình thường
//Chỉ khác let k ghe đè lại biến đã khai báo
