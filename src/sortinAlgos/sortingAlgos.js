// export const mergeSort = (array, animations = []) => {
//     if (array.length === 1) return array;
//     const middleIdx = Math.floor(array.length / 2);
//     const firstHalf = mergeSort(array.slice(0, middleIdx));
//     const secondHalf = mergeSort(array.slice(middleIdx));
//     const sortedArray = [];
//     let i = 0,
//         j = 0;
//     while (i < firstHalf.length && j < secondHalf.length) {
//         if (firstHalf[i] < secondHalf[j]) {
//             sortedArray.push(firstHalf[i++]);
//         } else {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// };

export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx,
        i = startIdx,
        j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}


// Quick Sort algo

export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
} 

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function quickSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        animations.push([leftIdx, rightIdx]);
        animations.push([leftIdx, rightIdx]);
        if (auxiliaryArray[leftIdx] > auxiliaryArray[pivotIdx] && auxiliaryArray[rightIdx] < auxiliaryArray[pivotIdx]) {
            animations.push([leftIdx, auxiliaryArray[rightIdx], rightIdx, auxiliaryArray[leftIdx]]);
            swap(leftIdx, rightIdx, auxiliaryArray);
        }
        if (auxiliaryArray[leftIdx] <= auxiliaryArray[pivotIdx]) leftIdx++;
        if (auxiliaryArray[rightIdx] >= auxiliaryArray[pivotIdx]) rightIdx--;
    }
    animations.push([pivotIdx, rightIdx]);
    animations.push([pivotIdx, rightIdx]);
    animations.push([pivotIdx, auxiliaryArray[rightIdx], rightIdx, auxiliaryArray[pivotIdx]]);
    swap(pivotIdx, rightIdx, auxiliaryArray);
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
        quickSortHelper(auxiliaryArray, startIdx, rightIdx - 1, mainArray, animations);
        quickSortHelper(auxiliaryArray, rightIdx + 1, endIdx, mainArray, animations);
    } else {
        quickSortHelper(auxiliaryArray, rightIdx + 1, endIdx, mainArray, animations);
        quickSortHelper(auxiliaryArray, startIdx, rightIdx - 1, mainArray, animations);
    }
}

