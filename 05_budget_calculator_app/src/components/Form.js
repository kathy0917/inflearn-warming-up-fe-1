import React from 'react';

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
      <input value="제출" type="submit" />
    </form>
  );
};

export default Form;
