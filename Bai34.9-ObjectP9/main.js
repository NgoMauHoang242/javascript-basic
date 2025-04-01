// Prototype trong javascript
//Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

//function declaration (thường dùng hơn)
function Student(fullName, ID, birthYear, homeTown) {
  //thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //Phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}
//Tạo các đối tượng cụ thể
const sv1 = new Student("Nguyễn Văn A", "2020202", 2003, "Trái Đất");
const sv2 = new Student("Nguyễn Văn B", "2020303", 2003, "Sao Hỏa");
