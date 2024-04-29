import LOREMIPSUM from './const.js';

const data = [
  {
    id: 1,
    title: 'Breakfast',
    type: [
      {
        pancakes: {
          price: 3000,
          description: LOREMIPSUM,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Lunch',
    type: [
      {
        diner: {
          price: 1000,
          description: LOREMIPSUM,
        },
      },
      {
        'egg attack': {
          price: 2000,
          description: LOREMIPSUM,
        },
      },
      {
        'american classic': {
          price: 4000,
          description: LOREMIPSUM,
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Shakes',
    type: [
      {
        milkshake: {
          price: 2000,
          description: LOREMIPSUM,
        },
      },
      {
        'oreo dream': {
          price: 7000,
          description: LOREMIPSUM,
        },
      },
      {
        'quarantine buddy': {
          price: 1000,
          description: LOREMIPSUM,
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Dinne',
    type: [
      {
        'bison steak': {
          price: 2000,
          description: LOREMIPSUM,
        },
      },
    ],
  },
];

export default data;
