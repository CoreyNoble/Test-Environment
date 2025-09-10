
import React from 'react';
import './App.css'

function App() {
  const INPUT = [1,8,6,2,5,4,8,3,7];

  function maxArea(height: number[]): number {
    let max = 0;

      for (let leftPointer = 0; leftPointer < height.length; leftPointer++) {
          for(let rightPointer = leftPointer + 1; rightPointer < height.length; rightPointer++) {
              const leftVal = height[leftPointer];
              const rightVal = height[rightPointer];
              const width = rightPointer - leftPointer;
              const bottleneck = Math.min(leftVal, rightVal);
              const area = width * bottleneck;

              max = Math.max(max, area);
              rightPointer = rightPointer + 1;
          }
      }

      return max;
};

  console.log('[INPUT]: ', INPUT);
  console.log('[OUTPUT]: ', maxArea(INPUT));

  return (
      <div className="app">
        {maxArea(INPUT)}
      </div>
  )
}

export default App
