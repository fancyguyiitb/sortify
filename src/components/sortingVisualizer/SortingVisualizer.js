import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/SortingAlgorithm.js";
import "./styles.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const SortingVisualizer = () => {
  const array = [
    464, 967, 876, 824, 372, 278, 939, 422, 44, 438, 997, 600, 777, 783, 161,
    74, 868, 493, 217, 618, 783, 497, 980, 198, 301, 244, 400, 891, 616, 883,
    374, 942, 979, 591, 176, 998, 402, 803, 884, 680, 340, 929, 94, 264, 787,
    446, 865, 842, 551, 823, 243, 515, 743, 540, 663, 853, 17, 32, 583, 696,
    625, 874, 756, 677, 308, 775, 431, 625, 731, 171, 930, 288, 781, 513, 694,
    464, 967, 876, 824, 372, 278, 939, 422, 44, 438, 997, 600, 777, 783, 161,
    74, 868, 493, 217, 618, 783, 497, 980, 198, 301, 244, 400, 891, 616, 883,
    374, 942, 979, 591, 176, 998, 402, 803, 884, 680, 340, 929, 94, 264, 787,
    446, 865, 842, 551, 823, 243, 515, 743, 540, 663, 853, 17, 32, 583, 696,
    625, 874, 756, 677, 308, 775, 431, 625, 731, 171, 930, 288, 781, 513, 694,
    955, 165, 607, 379, 75, 341, 651, 212, 625, 758, 962, 364, 874, 836, 723,
    313, 760, 789, 845, 561, 580, 156, 884, 704, 601, 619, 18, 456, 409, 111,
    214, 650, 738, 893, 28, 382, 736, 194, 860, 883, 711, 760, 894, 929, 721,
    738, 297, 979, 84, 706, 600, 782, 702, 657, 512, 33, 270, 837, 582, 777,
    401, 792, 77, 119, 708, 530, 549, 41, 793, 758, 950, 219, 974, 690, 500,
    583, 590, 422, 918, 619, 802, 974, 486, 827, 170, 903, 352, 872, 228, 574,
    576, 573, 552, 876, 423, 286, 179, 409, 106, 901, 261, 927, 766, 333, 274,
    68, 901, 439, 122, 77, 725, 643, 480, 10, 502, 383, 540, 731, 905, 934, 643,
    864, 646, 374, 869, 981, 494, 684, 68, 575, 249, 146, 17, 27, 208, 480, 972,
    861, 478, 746, 27, 364, 681, 20, 936, 931, 562, 393, 977, 322, 878, 696,
    195, 407, 939, 623, 925, 965, 299, 373, 999, 988, 497, 434, 344, 812, 801,
    342, 669, 625, 682, 823, 845, 860, 102, 196, 413, 368, 890, 905, 870, 299
  ];
  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight/2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  // quickSort() {
  //   // We leave it as an exercise to the viewer of this code to implement this method.
  // }

  // heapSort() {
  //   // We leave it as an exercise to the viewer of this code to implement this method.
  // }

  // bubbleSort() {
  //   // We leave it as an exercise to the viewer of this code to implement this method.
  // }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  //   testSortingAlgorithms() {
  //     for (let i = 0; i < 100; i++) {
  //       const array = [];
  //       const length = randomIntFromInterval(1, 1000);
  //       for (let i = 0; i < length; i++) {
  //         array.push(randomIntFromInterval(-1000, 1000));
  //       }
  //       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //       const mergeSortedArray = getMergeSortAnimations(array.slice());
  //       console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //     }
  //   }
  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value/2}px`,
          }}
        ></div>
      ))}
      <button onClick={() => this.resetArray()}>Generate New Array</button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button onClick={() => this.quickSort()}>Quick Sort</button>
      <button onClick={() => this.heapSort()}>Heap Sort</button>
      <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      <button onClick={() => this.testSortingAlgorithms()}>
        Test Sorting Algorithms (BROKEN)
      </button>
    </div>
  );
};

export default SortingVisualizer;

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
