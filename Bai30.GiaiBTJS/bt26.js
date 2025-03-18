function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); //Chuyển thành chữ thường

    //Kiểm tra xem ký tự nhập có trong bảng mã không
    if (a.includes(char)) {
      //Thực hiện chuyển đổi
      // Kiểm tra vị trí index ký tự nhập vào a
      let index = a.indexOf(char);
      //Lấy giá trị index, giống sang chuỗi b để lấy ký tự tương ứng trên b
      result += b[index];
    }
    //Nếu không có trong bảng mã, thì giữ nguyên ký tự và dồn vào biến result
    else {
      result += char; //result = result + char
    }
  }
  return result;
}
//Cho người dùng nhập liệu
let messageInput = prompt("Nhập tin nhắn cần mã hóa:");
let kq = encryptMessage(messageInput);

alert(`Tin nhắn được mã hóa ${kq}`);
