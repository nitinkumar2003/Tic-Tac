import React, { useState } from "react";
import TicToc from "./components/TicToc";

const ticObj = [
  { value: '1', user: '' },
  { value: '2', user: '' },
  { value: '3', user: '' },
  { value: '4', user: '' },
  { value: '5', user: '' },
  { value: '6', user: '' },
  { value: '7', user: '' },
  { value: '8', user: '' },
  { value: '9', user: '' }
];

const winningCombinations = [[0, 1, 2], [3, 4, 5],[6, 7, 8], [0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6]];

const App = () => {
  const [ticInfo, setTicInfo] = useState(ticObj);
  const [callCount, setCallCount] = useState(0);
  const [status, setStatus] = useState('Next player: X');

  const checkWinner = (info) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (info[a].user && info[a].user === info[b].user && info[a].user === info[c].user) {
        return info[a].user;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (ticInfo[index].user || checkWinner(ticInfo)) {
      return;
    }
    
    const user = callCount % 2 === 0 ? 'X' : 'O';
    setCallCount(prevCount => prevCount + 1);
    const newTicInfo = ticInfo.map((item, i) => 
      i === index ? { ...item, user } : item
    );
    setTicInfo(newTicInfo);

    const winner = checkWinner(newTicInfo);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (callCount + 1 === 9) {
      setStatus('Draw');
    } else {
      setStatus(`Next player: ${user === 'X' ? 'O' : 'X'}`);
    }
  };

  const resetTicToc = () => {
    setTicInfo(ticObj);
    setCallCount(0);
    setStatus('Next player: X');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h2>Tic Tac Toe</h2>
        <div className="status mb-4">{status}</div>
        <TicToc info={ticInfo} onClick={handleClick} />
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={resetTicToc}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
