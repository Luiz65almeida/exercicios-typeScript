const array = [5, 66, 48, 5587, 6451,2965, 495, 24];
let largest = 0;

for (let i = 0; i <= array.length; i++) {
    if (array [i] > largest){
         largest = array[i]
    }
}

console.log(largest)
