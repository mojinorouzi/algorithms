

const binarySearch = (numbers: number[], start: number,
    end: number, target: number): number => {
    const mid = Math.floor((end - start) / 2)
    if (target === numbers[mid]) {
        return mid
    }
    if (target > numbers[mid]) {
        return binarySearch(numbers, mid + 1, end, target)
    }
    if (target < numbers[mid]) {
        return binarySearch(numbers, 0, mid - 1, target)
    }
    return -1
}