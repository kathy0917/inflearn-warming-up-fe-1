import React from 'react';
import './Form.css';

const Form = ({ handleSubmit, value, setValue, price, setPrice }) => {
  const handleTitleChange = (e) => {
    setValue(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="value" placeholder="예)렌트비" value={value} onChange={handleTitleChange} />
      <input type="text" name="price" placeholder="0" value={price} onChange={handlePriceChange} />
      <input value="제출" type="submit" className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200" />
    </form>
  );
};

export default Form;
