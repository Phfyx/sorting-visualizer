import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgos from '../sortinAlgos/sortingAlgos';

// Sorting Algorithms
import { mergeSort } from '../sortinAlgos/sortingAlgos';

// Components

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }

    mergeSort() { 
        const animations = sortingAlgos.mergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 1);
            }
        }
    }

    quickSort() {
        const animations = sortingAlgos.quickSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                console.log(barOneIdx, barTwoIdx);
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 1);
            }
        }
    }

    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const { array } = this.state;

        return (
            <>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value}px` }}
                        >
                        </div>
                    ))}
                    <button onClick={() => this.resetArray()}> Generate New array</button>
                    <button onClick={() => this.mergeSort()}> Merge Sort</button>
                    <button onClick={() => this.quickSort()}> Quick Sort</button>
                    <button onClick={() => this.heapSort()}> Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
                </div>
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    // Test if the array is sorted
function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer;