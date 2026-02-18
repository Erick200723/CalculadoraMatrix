import Input from './components/input';
import Button from './components/Button';

import { Container, Contant, Rom } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>
      prev === '0' ? String(num) : `${prev}${num}`
    );
  };

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
    } else {
      handleEquals();
      setFirstNumber(currentNumber);
    }
    setOperation(op);
    setCurrentNumber('0');
  };

  const handleEquals = () => {
    if (!operation) return;

    let result = 0;

    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;

      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;

      case 'X':
        result = Number(firstNumber) * Number(currentNumber);
        break;

      case '/':
        result = Number(firstNumber) / Number(currentNumber);
        break;

      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation('');
  };

  return (
    <Container>
      <Contant>
        <Input value={currentNumber} />

        <Rom>
          <Button Label='X' onClick={() => handleOperation('X')} />
          <Button Label='/' onClick={() => handleOperation('/')} />
          <Button Label='C' onClick={handleOnClear} />
          <Button Label='=' onClick={handleEquals} />
        </Rom>

        <Rom>
          <Button Label='1' onClick={() => handleAddNumber(1)} />
          <Button Label='2' onClick={() => handleAddNumber(2)} />
          <Button Label='3' onClick={() => handleAddNumber(3)} />
          <Button Label='+' onClick={() => handleOperation('+')} />
        </Rom>

        <Rom>
          <Button Label='4' onClick={() => handleAddNumber(4)} />
          <Button Label='5' onClick={() => handleAddNumber(5)} />
          <Button Label='6' onClick={() => handleAddNumber(6)} />
          <Button Label='-' onClick={() => handleOperation('-')} />
        </Rom>

        <Rom>
          <Button Label='7' onClick={() => handleAddNumber(7)} />
          <Button Label='8' onClick={() => handleAddNumber(8)} />
          <Button Label='9' onClick={() => handleAddNumber(9)} />
          <Button Label='0' onClick={() => handleAddNumber(0)} />
        </Rom>
      </Contant>
    </Container>
  );
};

export default App;
