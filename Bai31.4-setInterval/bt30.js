function countdown(minutes) {
  alert("thời gian làm bài của bạn là : " + minutes + "Phút");
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    //Thân hàm
    let minitesLeft = Math.floor(seconds / 60); //65/60 ~ 1.083 --> 1
    let secondsLeft = seconds % 60;
    //Format second: hiện số dây theo đinhj dạng 01 02 03...
    let prefxSecondFormat = secondsLeft < 10 ? "0" : "";
    console.log(`${minitesLeft}:${prefxSecondFormat}${secondsLeft}`);
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian");
    } else {
      seconds--;
    }
  }, 1000);
}

let timeInput = Number(prompt("Mời nhập vào thời gian làm bài"));
//gọi hàm
countdown(timeInput);
