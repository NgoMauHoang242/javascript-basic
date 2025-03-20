let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);
let str = "Hôm lay tôi học object";
console.log(typeof str);

M = ["hoa", "mai", "đào", "lịu"];
console.log(typeof M);

//1. khai báo đối tượng, lieral syntax
let student = {
  //key + value
  //thuộc tính
  fullName: "Trần Như Qoẹo",
  bỉthYear: 2003,
  address: {
    city: "Đà nẵng",
    country: "Việt nam",
  },
  scores: [8, 9, 10],
  //Phương thức
  getAge: function () {
    return 2025 - this.bỉthYear;
  },

  // Phương thức được viết lại để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2025 - this.bỉthYear;
    return this.age;
  },
  diemTrungBinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    //Trả về dtb
    return sumScores / 3;
  },
};

let teacher = {
  "1 firstName": "Lò thị ",
  "@addres": {
    city: "Đà Nẵng",
    country: "Việt Nam",
  },
};

// TRuy cập thuộc tính : Dot Notation . và Bracket Notation[]

//Sử dụng dot (.)
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

//Sử dụng []
console.log(teacher["1 firstName"]);
console.log(teacher["@addres"]);

//Linh động sử dụng [] với biến
let inputKey = "address";
// let inputKey = prompt("Mời nhập key: (address,scores)");
console.log(`Truy xuất đến key dùng với tên biến inputKey : `);
console.log(student[inputKey]);

//vd: kiểm tra nếu nhập key k tồn tại thì báo lỗi
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log(`Key bạn nhập không tồn tại`);
}

//Truy cập phương thức
console.log(`TRuy cập phương thức`);
console.log(student.getAge());
console.log(student.diemTrungBinh());

//Vấn đề : Giả sử chương trình cần gọi nhiều lần hàm getAge
// --> chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại

//Gọi phương thức getAge2
student.getAge2();

//Xuất thử tuối thông qua thuộc tính age được thêm từ getAge2
console.log(student.age);

//THÊM , XÓA THUỘC TÍNH (THÊM CẶP KEY VALUE)
student.email = "nmh.242@gmail.com"; //thêm thuộc tính email
student["website"] = "http://conngua.com"; //thêm mới thuộc tính

//XÓA\
delete student.email;
console.log(student);

//SỬA\
student.website = "Giá trị này sửa";
console.log(student);
