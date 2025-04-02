//chọn phần tử h1
let heading = document.querySelector("h1");
//thay đổi style của h1
// heading.style.backgroundColor = "aqua";
// heading.style.fontSize = "49px";

//Cách viết gọn nhiều thuộc tính
Object.assign(heading.style, {
  backgroundColor: "aqua",
  fontSize: "49px",
  color: "red",
});
