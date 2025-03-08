function ptb2_1(a, b, c) {
  //tính
  delta = b ** 2 - 4 * a * c;
  //Kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm x1 = " + x1 + "x2 = " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("pt có nghiệm kép x1 = x2 =" + x1);
  } else {
    console.log("pt vô nghiệm");
  }
}
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);
