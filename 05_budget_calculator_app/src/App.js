import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';
import TotalPrice from './components/TotalPrice';
//const initialBudgetData = localStorage.getItem('budgetData') ? JSON.parse(localStorage.getItem('budgetData')) : [];

function App() {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState('');
  const [budgetData, setBudgetData] = useState([]);
  const handleRemoveClick = () => {
    setBudgetData([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBudgetData = {
      id: Date.now(),
      title: value,
      price: Number(price),
    };

    setBudgetData((prev) => [...prev, newBudgetData]);
    setValue('');
    setPrice('');
  };
  return (
    <div>
      <h1 className="bg-red-400">예산 계산기</h1>
      <Form handleSubmit={handleSubmit} value={value} setValue={setValue} price={price} setPrice={setPrice} />
      <Lists budgetData={budgetData} setBudgetData={setBudgetData} />
      <button className="remove-btn" onClick={handleRemoveClick}>
        목록 지우기
      </button>
      <TotalPrice budgetData={budgetData} />
    </div>
  );
}

export default App;
