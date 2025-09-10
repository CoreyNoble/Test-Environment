
import React from 'react';
import './App.css'

function App() {
  const INPUT = [1,8,6,2,5,4,8,3,7];

  function maxArea(height: number[]): number {
    let max = 0;

      // Brute Force Approach, O(n^2) time complexity, O(1) space complexity
      // for (let leftPointer = 0; leftPointer < height.length; leftPointer++) {
      //     for(let rightPointer = leftPointer + 1; rightPointer < height.length; rightPointer++) {
      //         const leftVal = height[leftPointer];
      //         const rightVal = height[rightPointer];
      //         const width = rightPointer - leftPointer;
      //         const bottleneck = Math.min(leftVal, rightVal);
      //         const area = width * bottleneck;

      //         max = Math.max(max, area);
      //         rightPointer = rightPointer + 1;
      //     }
      // }

      // Optimal Approach, O(n) time complexity, O(1) space complexity
      let leftPointer = 0;
      let rightPointer = height.length - 1;

      while (leftPointer < rightPointer) {
        const leftVal = height[leftPointer];
        const rightVal = height[rightPointer];
        const width = rightPointer - leftPointer;
        const bottleneck = Math.min(leftVal, rightVal);
        const area = width * bottleneck;

        console.log('[leftVal]: ', leftVal);
        console.log('[rightVal]: ', rightVal);
        console.log('[width]: ', width);
        console.log('[bottleneck]: ', bottleneck);
        console.log('[area]: ', area);

        max = Math.max(max, area);
        
        if (leftVal < rightVal) {
          leftPointer = leftPointer + 1;
        } else {
          rightPointer = rightPointer - 1;
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
