import React from 'react';

const Form = ({ handleSubmit, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="value" placeholder="예)렌트비" value={value} onChange={handleChange} />
      <input value="제출" type="submit" />
    </form>
  );
};

export default Form;
