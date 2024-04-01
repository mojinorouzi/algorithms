
const merge = (arr1 : number[] , arr2: number[]) : number[]=>{
    let newArr : number[] = []
    while(arr1.length && arr2.length) {
        if(arr1[0]> arr2[0]){
            newArr.push(arr2.shift() as number)
        }else{
            newArr.push(arr1.shift() as number)
        }
    }
    if(arr1.length) {
        newArr = newArr.concat(arr1)

    }
    if(arr2.length) {
        newArr = newArr.concat(arr2)
    }
    return newArr
}
const mergeSort = (arr:number[]):number[]=>{
    if(arr.length === 1) return arr;

    const mid = arr.length / 2
    let left = arr.slice(0 , mid )
    let right = arr.slice(mid , arr.length)
    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left , right)
    
}
