const item1 = document.querySelector(".list");
//hasAttribute
//Kiểm tra có class hay không
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

//removeAttribute
//Loại bỏ 1 thuộc tính khỏi phần tử
item2.removeAttribute("style");
console.log(item2.hasAttribute("style"));

//Bài tập
const item3 = document.querySelectorAll("ul li a");
item3.removeAttribute("href");
