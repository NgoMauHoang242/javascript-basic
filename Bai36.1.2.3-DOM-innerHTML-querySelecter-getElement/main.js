// Dom - innerHTML và gêtlement - ByID - ByTagName
//getElementsByTagName
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item);
console.log(li_item.length);
//getElementsByClassName
li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

//thay đổi
li_class_item[1].innerHTML = "gì cơ";
//getElementById
let el = document.getElementById("list_about");
console.log(el);
//thay đổi
el.innerHTML = "cúc";
//querySelector
let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "Sửa rồi";

//Chọn phần tử đầu tiên có lớp là "list" thay đổi nội dung
let firstListItem = document.querySelector(".list");
firstListItem.innerHTML = "Trang chủ";
//QUERYSELECTOR CÓ THỂ CHỌN CSS KẾT HỢP
let firstLinkList = document.querySelector("ul a");
console.log(firstLinkList);
//chọn phần tử input checkbox và đặt thuộc tính cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true;
//queryDelectorAll
let list_item = document.querySelector("li");
console.log(list_item);
list_item[1].innerHTML = "Liên hệ";
