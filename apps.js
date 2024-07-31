///.....  CODING CHALLENGE by  Emmanuel. (7/31/2024).....//
//challenge 1.......Find the Largest Number
//Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.
//function findLargest(a, b, c) 
{
    function findLargest(a, b, c) {
        if (a >= b && a >= c) {
          return a;
        } else if (b >= a && b >= c) {
          return b;
        } else {
          return c;
        }
      } 
}
console.log(findLargest(5, 10, 3));  // Output: 10
console.log(findLargest(8, 2, 6));   // Output: 8

//Reverse Words in a Sentence
//Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence are reversed, but the words themselves aren't.
//function reverseWords(sentence)


function reverseWords(sentence) {
    const words = sentence.split('');
    const reverseWords = words.map(words => words.split('').reverse().join(''));
    return reverseWords.join('');
}
console.log(reverseWords("Hello World"));  //output : "olleH dlroW"
console.log(reverseWords("Javascript is fun")) //output : "tpirSavaJ si nuf"
console.log(reverseWords("The quick brown fox")); // output is "xof nworb kciuq ehT"

//In the first problem, i made use of simple conditional statements to find the largest number among the three arguments.

// In the second problem, What i did the following:

// 1. Split the sentence into words using `split(' ')`.
// 2. Reverse each word using `map()` and `split('')`, `reverse()`, and `join('')`.
// 3. Join the reversed words back into a sentence using `join(' ')`.


// Challenge 2.... Find the Longest Word in an Array
// Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.
//function findLongestWord(words) 

function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  {

}
console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// what i did was making the function works by:

// 1. Assuming the first word is the longest.
// 2. Iterating through the rest of the words in the array.
// 3. If a word is found that is longer than the current longest word, it becomes the new longest word.
// 4. After checking all words, the longest word is returned.

// Challenge 3 ... Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in the sentence and the corresponding value is the number of times that word appears in the sentence.

function countWords(sentence) {
    const words = sentence.toLowerCase().split(' ');
  const wordCount = {};
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}   

console.log(countWords("hello world hello"));
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test"));
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }

// what i did was.......

// 1. Converting the sentence to lowercase and splitting it into words using `split(' ')`.
// 2. Creating an empty object `wordCount` to store the word counts.
// 3. Iterating through each word in the sentence.
// 4. If the word is already in `wordCount`, incrementing its count by 1.
// 5. If the word is not in `wordCount`, adding it with a count of 1.
// 6. Returning the `wordCount` object.



