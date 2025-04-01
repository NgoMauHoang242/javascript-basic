const student = {
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
    return 2025 - this.birthYear;
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
// dùng hàm tạo để tạo khuôn mẫu
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  //thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //Phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
};
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
//Truy cập thuộc tính của đối tượng
