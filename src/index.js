import "./styles.css";

const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

console.log(shuffle);
const bonus = shuffle[6];
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
console.log(winBalls);
console.log(bonus);

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $target.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  const $result = document.querySelector("#result");
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, 1000 + 1000 * i);
}

const $bonus = document.querySelector("#bonus");
setTimeout(() => {
  showBall(bonus, $bonus);
}, 1000 + 1000 * winBalls.length);
