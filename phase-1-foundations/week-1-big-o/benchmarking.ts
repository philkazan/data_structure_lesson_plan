const numbers: number[] = [3,9,10,2,11];

let biggest: number = numbers[0];
for (const element of numbers) {
    if (element > biggest) {
        biggest = element;
    }
}

console.log(biggest);