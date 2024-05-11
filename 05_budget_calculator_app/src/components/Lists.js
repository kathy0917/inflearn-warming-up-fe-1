import React from 'react';
import List from './List';

const Lists = ({ budgetData, setBudgetData }) => {
  return (
    <div>
      {budgetData.map((data) => (
        <List key={data.id} id={data.id} title={data.title} price={data.price} budgetData={budgetData} setBudgetData={setBudgetData} />
      ))}
    </div>
  );
};

export default Lists;
