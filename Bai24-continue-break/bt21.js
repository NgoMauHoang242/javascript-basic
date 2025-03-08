while (true) {
  //Nhập số a từ người dùng
  let a = Number(prompt("Nhập số nguyên dương a"));

  //Kiểm tra xem a có phải nguyên dương hay không
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Nhập lại a , a phải là số nguyên dương"));
  }
  alert("Giá trị a hợp lệ , a =" + a);
  //Kiểm tra a có phải số nguyên tố không
  let isPrime = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }

  //Hiện kết quả
  if (isPrime) {
    alert(a + " là số nguyên tố");
  } else {
    alert(a + " không phải số nguyên tố");
  }
  //Hỏi người dùng có tiếp tục hay không
  let answer = prompt(`
    Bạn có muốn tiếp tục không?
    Nhập "no" để thoát
    Bấm phím bất kì để tiếp tục
    `);
  if (answer.toLowerCase() === "no") {
    break;
  }
}
