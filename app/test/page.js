'use client'
import { useState } from 'react';
import setNotes from '@/lib/firestore'; // Import Firestore separately

const MyPage = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange = (e) => {
    if (e.target.name === 'input1') {
      setInput1(e.target.value);
    } else if (e.target.name === 'input2') {
      setInput2(e.target.value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNotes({
      input1,
      input2,
    })

  };

  return (
    <div>
      <h1>My Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Input 1:
          <input type="text" name="input1" value={input1} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Input 2:
          <input type="text" name="input2" value={input2} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MyPage;
