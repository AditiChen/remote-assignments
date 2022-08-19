function max(numbers) {
    let biggestNumber = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (biggestNumber > numbers[i]) {
            biggestNumber = biggestNumber;
        } else {
            biggestNumber = numbers[i];
        }
    }
    console.log(biggestNumber);   
}


max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7