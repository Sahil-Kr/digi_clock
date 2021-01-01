const zeroArr = [0, 1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14];
const oneArr = [1, 4, 7, 10, 13];
const twoArr = [0, 1, 2, 5, 8, 7, 6, 9, 12, 13, 14];
const threeArr = [0, 1, 2, 5, 8, 7, 6, 11, 14, 13, 12];
const fourArr = [0, 3, 6, 7, 8, 5, 2, 11, 14];
const fiveArr = [2, 1, 0, 3, 6, 7, 8, 11, 14, 13, 12];
const sixArr = [2, 1, 0, 3, 6, 7, 8, 11, 14, 13, 12, 9];
const sevenArr = [0, 1, 2, 5, 8, 11, 14];
const eightArr = [0, 1, 2, 5, 8, 7, 6, 3, 9, 12, 13, 14, 11];
const nineArr = [0, 1, 2, 5, 8, 7, 6, 3, 11, 14, 13, 12];

const numMap = {
  1: oneArr,
  2: twoArr,
  3: threeArr,
  4: fourArr,
  5: fiveArr,
  6: sixArr,
  7: sevenArr,
  8: eightArr,
  9: nineArr,
  0: zeroArr,
};

const hourEle = document.querySelectorAll(".hour-tile");
const minEle = document.querySelectorAll(".minute-tile");
const secEle = document.querySelector(".second-count");

const setHourTile = (num, offset) => {
  for (let k = 0; k < 15; k++) {
    if (num.includes(k)) {
      hourEle[k + offset].style.backgroundColor = "yellow";
    } else hourEle[k + offset].style.backgroundColor = "#000";
  }
};

const setMinuteTile = (num, offset) => {
  for (let k = 0; k < 15; k++) {
    if (num.includes(k)) {
      minEle[k + offset].style.backgroundColor = "yellow";
    } else minEle[k + offset].style.backgroundColor = "#000";
  }
};

setInterval(() => {
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let hourNum = today.getHours().toString().split("");
  let minuteNum = today.getMinutes().toString().split("");
  // console.log(today.getSeconds().toString().length);

  secEle.textContent =
    today.getSeconds().toString().length > 1
      ? today.getSeconds()
      : "0" + today.getSeconds();

  if (hourNum.length > 1) {
    setHourTile(numMap[Number(hourNum[hourNum.length - 1])], 15);
    setHourTile(numMap[Number(hourNum[0])], 0);
  } else {
    setHourTile(numMap[0], 0);
    setHourTile(numMap[Number(hourNum[0])], 15);
  }

  if (minuteNum.length > 1) {
    setMinuteTile(numMap[Number(minuteNum[minuteNum.length - 1])], 15);
    setMinuteTile(numMap[Number(minuteNum[0])], 0);
  } else {
    setMinuteTile(numMap[0], 0);
    setMinuteTile(numMap[Number(minuteNum[0])], 15);
  }

  //console.log(time);
}, 1000);
