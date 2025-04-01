const firstLink = document.querySelector("a");

if (firstLink) {
  const linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Không tìm thấy thẻ");
}
//9. setAttribute
firstLink.setAttribute("target", "_blank");
//sử dụng querySelectoAll để chọn tất cả các thẻ a trong ul
const links = document.querySelectorAll("ul a");
console.log(links);
links.forEach((singleLink) => {
  singleLink.setAttribute("target", "_blank");
});
document.getElementById("heading_title").style.color = "blue";
