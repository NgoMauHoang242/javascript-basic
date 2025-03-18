//setInterval(function , miliseconds, param1, param2,..)

//vd;
function showNotification() {
  console.log("Bạn có xxx tin nhắn chưa đọc");
}
// setInterval(showNotification, 2000);

//vd2
function updateTime() {
  let currenTime = new Date();
  console.log(currenTime);
}
// setInterval(updateTime,1000);

//Hủy lặp

let count = () => {
  console.log(counter++);
  if (counter === 5) {
    //dừng lặp dùng clearInterval
    clearInterval(stopInterval);
  }
};

//Gán biến nhận giá trị trả về
let stopInterval = setInterval(count, 1000);
