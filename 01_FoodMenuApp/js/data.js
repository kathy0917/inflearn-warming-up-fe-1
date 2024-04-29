import LOREMIPSUM from './const.js';

const data = [
  {
    id: 1,
    title: 'Breakfast',
    type: [
      {
        title: 'pancakes',
        image: '../img/pancakes.jpg',
        price: 3000,
        description: LOREMIPSUM,
      },
    ],
  },
  {
    id: 2,
    title: 'Lunch',
    type: [
      {
        title: 'diner',
        image: '../img/diner.jpg',
        price: 1000,
        description: LOREMIPSUM,
      },
      {
        title: 'egg-attack',
        image: '../img/egg.jpeg',
        price: 2000,
        description: LOREMIPSUM,
      },
      {
        title: 'american-classic',
        image: '../img/classic.jpeg',
        price: 4000,
        description: LOREMIPSUM,
      },
    ],
  },
  {
    id: 3,
    title: 'Shakes',
    type: [
      {
        title: 'milkshake',
        image: '../img/milkshake.png',
        price: 2000,
        description: LOREMIPSUM,
      },
      {
        title: 'oreo dream',
        image: '../img/oreo.jpeg',
        price: 7000,
        description: LOREMIPSUM,
      },
      {
        title: 'quarantine buddy',
        image: '../img/quarantine.jpeg',
        price: 1000,
        description: LOREMIPSUM,
      },
    ],
  },
  {
    id: 4,
    title: 'Dinner',
    type: [
      {
        title: 'bison steak',
        image: '../img/steak.jpeg',
        price: 2000,
        description: LOREMIPSUM,
      },
    ],
  },
];

export default data;
