import React from 'react';
import './TotalPrice.css';

const TotalPrice = ({ budgetData }) => {
  const total = budgetData.reduce((total, data) => {
    return total + data.price;
  }, 0);

  return <div className="total-price">총금액 : {total}</div>;
};

export default TotalPrice;
