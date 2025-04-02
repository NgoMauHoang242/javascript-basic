//chọn ptu demo
let elm = document.getElementById("demo");

//textContent
console.log(`textContent: `);

console.log(elm.textContent);

//innerText
console.log(`innerText: `);
console.log(elm.innerText);

console.log(`innerHTML: `);
console.log(elm.innerHTML);

//chọn đến phần tử có id là "demo2"
let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>AI da đến </i></p>";
