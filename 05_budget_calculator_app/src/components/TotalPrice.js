import React from 'react';

const TotalPrice = ({ budgetData }) => {
  const total = budgetData.reduce((total, data) => {
    return total + data.price;
  }, 0);

  return <div>{total}</div>;
};

export default TotalPrice;
