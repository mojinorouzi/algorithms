function swap(arr: number[], i: number, j: number): void {
    const iValue = arr[i]
    const jValue = arr[j]
    arr[j] = iValue
    arr[i] = jValue
}
function partition(arr: Array<number>, left: number = 0, right: number = arr.length - 1): number {
    const pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j)
            i++;
            j--;
        }
    }
    return i
}


function quickSort(arr: Array<number>, left: number = 0, right: number = arr.length - 1): number[] {
    let index: number
    if (arr.length > 1) {
        index = partition(arr, left, right)
        if (index - 1 > left) {
            quickSort(arr, left, index - 1)
        }
        if (index < right) {
            quickSort(arr, index, right)
        }
    }
    return arr
}

