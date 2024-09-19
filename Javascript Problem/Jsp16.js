//Check the number is amstrong or not

function isArmstrongNumber(num) {
    // Convert the number to a string to work with individual digits
    const digits = num.toString().split('');
    const numDigits = digits.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), numDigits);
    }, 0);

    // Check if the sum is equal to the original number
    return sum === num;
}

// Example usage
const testNumber = 153;
if (isArmstrongNumber(testNumber)) {
    console.log(`${testNumber} is an Armstrong number.`);
} else {
    console.log(`${testNumber} is not an Armstrong number.`);
}
