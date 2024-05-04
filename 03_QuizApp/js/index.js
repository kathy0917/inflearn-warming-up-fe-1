import OPERATIONS from './const.js';

const init = () => {
  const quiz = generateRandomQuiz();
  const answer = calculateQuiz(quiz);
  const answerCase = generateRandomAnswer(answer);

  drawQuiz(quiz);
  drawAnswerCase(answerCase, answer);
  handleAnswerBtn(answer);
  handleNextBtn();
  handleRetryBtn();
};

const generateRandomQuiz = () => {
  const min = 1;
  const max = 100;
  const randomNumA = Math.floor(Math.random() * (max - min + 1) + min);
  const randomNumB = Math.floor(Math.random() * (max - min + 1) + min);
  const operations = OPERATIONS[Math.floor(Math.random() * ['+', '/', '*', '-'].length)];

  return `${randomNumA}${operations}${randomNumB}`;
};

const calculateQuiz = (quiz) => {
  let answer = 0;
  quiz.split('').forEach((ele) => {
    if (ele === '+') answer = Number(quiz.split(ele)[0]) + Number(quiz.split(ele)[1]);
    else if (ele === '-') answer = Number(quiz.split(ele)[0]) - Number(quiz.split(ele)[1]);
    else if (ele === '*') answer = Number(quiz.split(ele)[0]) * Number(quiz.split(ele)[1]);
    else if (ele === '/') answer = (Number(quiz.split(ele)[0]) / Number(quiz.split(ele)[1])).toFixed(2);
  });

  return answer;
};

const generateRandomAnswer = (answer) => {
  const min = 1;
  const max = 100;
  const randomAnswer = [Number(answer), Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)];
  return randomAnswer.sort(() => Math.random() - 0.5).slice(0, 3);
};

const drawQuiz = (quiz) => {
  document.querySelector('.quiz').innerHTML = `${quiz}?`;
};

const drawAnswerCase = (answerCase, answer) => {
  answerCase.forEach((ele) => {
    document.querySelector('.answer').innerHTML += `<button id='${ele}'>${ele}</button>`;
  });
  console.log(answerCase);
  console.log(answer);
  if (answerCase.indexOf(Number(answer)) === -1) document.querySelector('.answer').innerHTML += `<button id='none'>정답이 없습니다.</button>`;
};

const handleAnswerBtn = (answer) => {
  const onClickAnswerBtn = (e) => {
    if (answer.toString() === e.target.innerText) {
      console.log(document.querySelector('.answer').querySelectorAll('button'));

      document.querySelector('.next').style.display = 'block';
      document.querySelector('.retry').style.display = 'none';
      document.body.style.backgroundColor = 'green';
    } else if (document.getElementById(`none`)) {
      document.getElementById(`none`).style.backgroundColor = 'green';
      if (e.target.id === 'none') {
        document.querySelector('.next').style.display = 'block';
        document.body.style.backgroundColor = 'green';
      } else {
        document.querySelector('.retry').style.display = 'block';
        document.body.style.backgroundColor = 'red';
      }
    } else {
      document.body.style.backgroundColor = 'red';
      document.querySelector('.next').style.display = 'none';
      document.querySelector('.retry').style.display = 'block';
    }
    const button = document.querySelector('.answer').querySelectorAll('button');
    button.forEach((ele) => (ele.style.backgroundColor = 'red'));
    if (document.getElementById(`${answer}`)) document.getElementById(`${answer}`).style.backgroundColor = 'green';
    if (document.getElementById(`none`)) document.getElementById(`none`).style.backgroundColor = 'green';
  };
  document.querySelector('.answer').addEventListener('click', onClickAnswerBtn);
};

const handleNextBtn = () => {
  const onClickNextBtn = (e) => {
    document.querySelector('.answer').innerHTML = '';
    document.body.style.backgroundColor = 'white';

    init();
  };
  document.querySelector('.next').addEventListener('click', onClickNextBtn);
};

const handleRetryBtn = () => {
  const onClickRetryBtn = (e) => {
    document.querySelector('.answer').innerHTML = '';
    document.body.style.backgroundColor = 'white';
    document.querySelector('.retry').style.display = 'none';
    init();
  };
  document.querySelector('.retry').addEventListener('click', onClickRetryBtn);
};

init();
