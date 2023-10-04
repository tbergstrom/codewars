// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Requirements

//     You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
//     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

const isPrime = (num)=> {
    if(num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
// ***********************************************************************************************************

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digitalRoot = (n)=> {
  
    if (n < 10) {
      return n;
    }
    
    let sum = 0; 
    while (n != 0) {
      let digit = n % 10;
      sum += digit;
      n = Math.floor(n/10);
    }
    
    return digitalRoot(sum);
  }
// ***********************************************************************************************************

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

const humanReadable = (seconds)=> {
    if(seconds < 1) {
        return "00:00:00";
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600) / 60;
    let seconds = seconds % 60;

    let HH = String(hours).padStart(2, '0');
    let MM = String(minutes).padStart(2, '0');
    let SS = String(seconds).padStart(2, '0');

    return `${HH}:${MM}:${SS}`;
}
// ***********************************************************************************************************

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (message)=> {

    //okay let's make an object of key/ values.
    // keys will be a-z, lowercase.
    // values will be the numerical value of each letter:
        // a: 1, b: 2
    // we iterate thru the original message.
    // we check to see if each char is in the object.
    // if it is, and the numerical value + 13 is less than or equal to 26:
        // we just return the numerical value + 13.
    // if the numerical value + 13 is greater than 26, that means the letter is 
        // at the end of the alphabet, and it wraps around to the beginning.
    // So. We should find the numerical value of those characters, then we subtract that value from 26.  Then we return the letter that has a value that corresponds to the remainder.

    // if a char is not a-z, we just return the char as-is

    // charCodes for 'a' - 'z' are 97 - 122
    // charCodes for 'A' - 'Z' are 65 - 90

    // if the charCode for any given lowerCase char is less than 13 digits from 122,
        // we need to subtract 122 - charCodeAt(the char in question),
            // and then add that number to 97
    // if the charCode for any given UpperCase char is less than 13 from 90,
        // we subtract 90 - charCodeAt(the char in question),
            // and add that number to 65

    // if the charCode is any different, aka, not in range of 65 - 90 OR 97 - 122,
        // we just add the char to the output string as-is

    let rottedMessage = "";
    let diff = 0;

    for(let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {

            let rotatedCharCode = charCode - 13;
            if (rotatedCharCode < 65) {
                rotatedCharCode += 26;
            }
            rottedMessage += String.fromCharCode(rotatedCharCode);
        } else if (charCode >= 97 && charCode <= 122) {

            let rotatedCharCode = charCode - 13;
            if (rotatedCharCode < 97) {
                rotatedCharCode += 26;
            }
            rottedMessage += String.fromCharCode(rotatedCharCode);
        } else {
            rottedMessage += message[i];
        }
    }
    return rottedMessage;
}