import { PARAGRAPH } from './const.js';

let timerID;

const init = () => {
  localStorage.setItem('errorLetter', 0);
  localStorage.setItem('correctLetter', 0);
  localStorage.setItem('inputLen', 0);
  localStorage.setItem('paragraphIdx', 0);
  localStorage.setItem('inputVal', '');

  document.querySelector('.wpm').style.display = 'none';
  document.querySelector('.cpm').style.display = 'none';
  document.querySelector('.user-typing').disabled = false;
  document.querySelector('.user-typing').value = '';
  document.querySelector('.errors').querySelector('span').innerHTML = 0;
  document.querySelector('.accuracy').querySelector('span').innerHTML = 0;

  drawSentence();
  makeTimer();
  drawTimer();
  calculateErrors();
  calculateAccuracy();
};

const drawSentence = () => {
  const sentence = document.querySelector('.sentence');
  const paragraph = PARAGRAPH.split('.');
  let idx = Number(localStorage.getItem('paragraphIdx'));
  sentence.innerHTML = `${paragraph[idx]}.`;
  idx++;
  localStorage.setItem('paragraphIdx', idx);
};

const makeTimer = () => {
  timerID = setInterval(drawTimer, 1000);
};

const drawTimer = () => {
  const second = document.getElementById('second');
  const timer = Number(second.innerText) - 1;

  if (timer < 0) {
    second.innerText = 60;
    clearInterval(timerID);
    const inputLen = document.querySelector('.user-typing').value.length;
    localStorage.setItem('inputVal', document.querySelector('.user-typing').value);

    drawCPM(inputLen);
    drawWPM();
    replayMeasurement();
  } else {
    second.innerText = timer;
  }
};

const calculateErrors = () => {
  const input = document.querySelector('.user-typing');
  const sentence = document.querySelector('.sentence').innerText;

  input.addEventListener('input', function () {
    let editedSentence = '';

    for (let i = 0; i < sentence.length; i++) {
      if (i < input.value.length) {
        if (input.value[i] === sentence[i]) {
          editedSentence += `<span class='correct'>${sentence[i]}</span>`;
        } else {
          editedSentence += `<span class='incorrect'>${sentence[i]}</span>`;
        }
      } else {
        editedSentence += `<span class='untyped'>${sentence[i]}</span>`;
      }
      if (sentence.length === input.value.length) {
        localStorage.setItem('errorLetter', document.querySelector('.errors').querySelector('span').innerText);
        localStorage.setItem('correctLetter', document.querySelectorAll('.correct').length);
        localStorage.setItem('inputLen', input.value.length);
        localStorage.setItem('inputVal', input.value);

        input.value = '';

        showNextSentence();
      }
    }

    document.querySelector('.sentence').innerHTML = editedSentence;

    const errorLetterLen = Number(localStorage.getItem('errorLetter')) + document.querySelectorAll('.incorrect').length;
    document.querySelector('.errors').querySelector('span').innerHTML = errorLetterLen;
  });
};

const calculateAccuracy = () => {
  const input = document.querySelector('.user-typing');

  input.addEventListener('input', function () {
    const correctLetter = Number(localStorage.getItem('correctLetter')) + document.querySelectorAll('.correct').length;
    const inputLen = Number(localStorage.getItem('inputLen')) + input.value.length;
    document.querySelector('.accuracy').querySelector('span').innerHTML = Math.floor((correctLetter / inputLen) * 100);
  });
};

const drawCPM = (inputLen) => {
  const totalInputLen = inputLen + Number(localStorage.getItem('inputLen'));
  document.querySelector('.cpm').querySelector('span').innerHTML = totalInputLen;
  document.querySelector('.cpm').style.display = 'block';
};

const drawWPM = () => {
  const word = localStorage.getItem('inputVal') !== '' ? localStorage.getItem('inputVal').split(' ').length : 0;
  document.querySelector('.wpm').querySelector('span').innerHTML = word;
  document.querySelector('.wpm').style.display = 'block';
};

const replayMeasurement = () => {
  document.querySelector('.retry').style.display = 'block';
  document.querySelector('.sentence').innerHTML = '새 게임을 시작하려면 다시 시작을 클릭하세요.';
  document.querySelector('.user-typing').disabled = true;

  document.querySelector('.retry').addEventListener('click', () => {
    init();
  });
};
const showNextSentence = () => {
  drawSentence();
  calculateErrors();
  calculateAccuracy();
};

init();
