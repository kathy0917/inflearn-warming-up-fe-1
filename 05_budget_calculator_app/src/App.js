import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

const initialBudgetData = localStorage.getItem('budgetData') ? JSON.parse(localStorage.getItem('budgetData')) : [];

function App() {
  const [value, setValue] = useState('');
  const [budgetData, setBudgetData] = useState(initialBudgetData);

  const handleRemoveClick = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <h1>예산 계산기</h1>
      <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      <Lists budgetData={budgetData} setBudgetData={setBudgetData} />
      <button onClick={handleRemoveClick}>목록 지우기</button>
    </div>
  );
}

export default App;
