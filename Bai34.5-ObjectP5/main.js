//Object.keys(obj)
//Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng.
let person = {
  name: "Mậu",
  age: 22,
};
let keys = Object.keys(person);
console.log(keys);

//Object.values(obj);
//Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng.
let person2 = {
  name: "Mậu",
  age: 22,
};

let values = Object.values(person2);
console.log(values);

//Object.entries(obj);
//Phương thức này trả về một mảng chứa các cặp [Khóa , giá trị] của đối tượng dưới dạng mảng con.
let person3 = {
  name: "Mậu",
  age: 22,
};
let entries = Object.entries(person3);
console.log(person3);

//Object.assign(target,source);
//Sử dụng để sao chép các thuộc tính từ một hoặc nhiều đối tượng từ nguồn (source) vào một đối tượng đích (target).
let target = { c: 100 };
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target);

let target2 = { ...source1, ...source2 };
console.log(target2);

//Object.hasOwnProperty(prop);
//Phương thức này kiểm tra xem đối tượng có thuộc tính nào
//đó hay không cà trả về true nếu có
let person4 = {
  name: "Mậu",
  age: 22,
};

console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("job"));

//Object.freeze(obj);
//Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, sửa , xóa.
let person5 = {
  name: "Mậu",
  age: 22,
};

Object.freeze(person5);
//sửa
person5.age = 100;
//thêm
person5.email = "mau@gmail.com";
//xóa
delete person5.age;

console.log(person5); //Không thay đổi (đóng băng)

//Object.seal(obj)
//Seal the object
//Ngăn không thêm, xóa , chỉ cho phép sửa giá trị
let person6 = {
  name: "Mậu",
  age: 22,
};

Object.seal(person6);
//thêm
person6.location = "New York";
//xóa
delete person6.age;
// sửa
person6.age = 100;
console.log(person6);
