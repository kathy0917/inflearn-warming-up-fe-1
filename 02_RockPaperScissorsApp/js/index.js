import ROCKPAPERSCISSORS from './const.js';

const init = () => {
  handlePlayerBtn();
};

const handlePlayerBtn = () => {
  const button = document.querySelector('.play-button');
  button.addEventListener('click', onClickPlayBtn);
};

const onClickPlayBtn = (e) => {
  playGame(e.target.innerText);
};

const playGame = (player) => {
  const computer = ROCKPAPERSCISSORS[Math.floor(Math.random() * ROCKPAPERSCISSORS.length)];
  let winner = 'player';
  if (player === '가위' && computer === '바위') winner = 'computer';
  else if (player === '보' && computer === '가위') winner = 'computer';
  else if (player === computer) winner = 'none';

  drawWinnerScore(winner);
};

const drawWinnerScore = (winner) => {
  if (winner !== 'none') document.querySelector(`.${winner}-cnt`).innerText = Number(document.querySelector(`.${winner}-cnt`).innerText) + 1;
  const gameCnt = document.querySelector('.game-cnt').querySelector('span').innerText;

  document.querySelector('.game-cnt').querySelector('span').innerText = Number(gameCnt) - 1;
  const div = document.querySelector('.winner');
  div.innerText = winner === 'none' ? '무승부' : `${winner} 승리`;
  div.style.display = 'block';
  if (gameCnt === '1') drawGameResult();
};

const drawGameResult = () => {
  const player = Number(document.querySelector('.player-cnt').innerText);
  const computer = Number(document.querySelector('.computer-cnt').innerText);
  let result = '비겼습니다.';

  if (player < computer) result = '졌습니다.';
  else if (player > computer) result = '이겼습니다.';
  document.querySelector('.after').querySelector('span').innerText = result;
  document.querySelector('.before').style.display = 'none';
  replayGame();
};

const replayGame = () => {
  document.querySelector('.after').style.display = 'block';

  document.querySelector('.replay-button').addEventListener('click', (e) => {
    document.querySelector('.player-cnt').innerText = 0;
    document.querySelector('.computer-cnt').innerText = 0;
    document.querySelector('.before').style.display = 'block';
    document.querySelector('.after').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.game-cnt').querySelector('span').innerText = 10;
    init();
  });
};

init();
