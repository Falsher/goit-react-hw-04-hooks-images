import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ImageInput({ onSubmit }) {
  const [inputData, setInputData] = useState('');
  const handleInputChange = event => {
    setInputData(event.currentTarget.value.toLowerCase());
  };
  const reset = () => {
    setInputData('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (inputData === '') {
      toast.error('Введите имя image!');
      return;
    }
    onSubmit(inputData);
    reset();
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={inputData}
        onChange={handleInputChange}
      />
    </form>
  );
}
