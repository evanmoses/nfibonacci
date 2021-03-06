import React, { useState } from 'react';

import Title from './components/Title';
import NumberInput from './components/NumberInput';
import ValueDisplay from './components/ValueDisplay';

function App() {
  const [numOfValues, setNumOfValues] = useState(10);
  const [inputError, setInputError] = useState(false);

  const handleNumChange = (e) => {
    setNumOfValues(e.target.value);
  };

  const handleSliderChange = (e) => {
    setInputError(false);
    handleNumChange(e);
  };

  const validateTextInput = (e) => {
    const { value } = e.target;
    if (Number.isInteger(parseFloat(value)) && value > 0 && value < 501) {
      handleNumChange(e);
      setInputError(false);
    } else {
      setInputError(true);
      handleNumChange(e);
    }
  };

  return (
    <>
      <Title />
      <NumberInput
        numOfValues={numOfValues}
        handleSliderChange={handleSliderChange}
        inputError={inputError}
        validateTextInput={validateTextInput}
      />
      <ValueDisplay numOfValues={numOfValues} inputError={inputError} />
    </>
  );
}

export default App;
