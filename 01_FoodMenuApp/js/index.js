import data from './data.js';

const nav = document.querySelector('.food-type');
const title = data.map((ele, idx) => ele.title);
title.unshift('All');

title.forEach((ele) => {
  const button = document.createElement('button');
  button.innerText = ele;
  nav.appendChild(button);
});

const main = document.querySelector('.food-content');

nav.addEventListener('click', (e) => {
  const targetName = e.target.innerText;

  if (targetName === 'All') drawAllContents(data);

  data.forEach((ele) => {
    if (ele.title === targetName) drawContents(ele);
  });
});

const drawContents = (foods) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  foods.type.forEach((food) => {
    const div = document.createElement('div');

    const content = `<img src='01_FoodMenuApp/${food.image}'/>
    <div>${food.title}</div>
    <div>${food.price}</div>
    <p>${food.description}</p>
    `;
    div.innerHTML = content;
    main.appendChild(div);
  });
};

const drawAllContents = (allFoods) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  allFoods.forEach((foods) => {
    foods.type.forEach((food) => {
      const div = document.createElement('div');

      const content = `<img src='01_FoodMenuApp/${food.image}'/>
            <div>${food.title}</div>
            <div>${food.price}</div>
            <p>${food.description}</p>
            `;
      div.innerHTML = content;
      main.appendChild(div);
    });
  });
};
