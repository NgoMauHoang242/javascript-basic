//Đếm từ tôi trong chuỗi

const a = "tôi chăm học tôi chịu khó tôi lười làm";
const targetWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}
alert(`Số lần xuất hiện của từ ${targetWord} trong chuỗi là : ${count}`);
