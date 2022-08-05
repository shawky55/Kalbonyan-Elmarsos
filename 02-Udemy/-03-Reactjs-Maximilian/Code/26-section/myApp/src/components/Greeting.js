import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);
  return (
    <>
      <h1>! Hello World !</h1>
      {!textChanged && <Output>Good morning</Output>}
      {textChanged && <Output>Good bye</Output>}
      <button onClick={() => setTextChanged(true)}>Change State</button>
    </>
  );
};

export default Greeting;
