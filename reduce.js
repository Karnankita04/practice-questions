// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number);
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product * number);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return sumOf(numbers) / numbers.length;
};

// minOf  ([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((minSoFar, number) =>
    minSoFar < number ? minSoFar : number
  );
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((maxSoFar, number) =>
    maxSoFar > number ? maxSoFar : number
  );
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.reduce((sumSoFar, number) =>
    number > 0 ? sumSoFar + number : sumSoFar
  );
};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce((sumSoFar, number) => sumSoFar + number * number, 0);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;

const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(
    (sumSoFar, number) => sumSoFar + (isOdd(number) ? number : 0),
    0
  );
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, number) => (number < 0 ? count + 1 : count), 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = (number) => (number & 1) === 0;

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(
    (sum, number) => (isEven(number) ? sum + number * number : sum),
    0
  );
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((concatenatedWord, word) =>
    concatenatedWord.concat(word)
  );
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce((longestWordSoFar, word) =>
    longestWordSoFar.length < word.length ? word : longestWordSoFar
  );
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce((shortestWordSoFar, word) =>
    shortestWordSoFar.length > word.length ? word : shortestWordSoFar
  );
};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((stringWithComma, word) =>
    [stringWithComma, word].join(",")
  );
};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((reversedSoFar, word) => [word, reversedSoFar].join(" "));
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((stringWithSpace, word) =>
    [stringWithSpace, word].join(" ")
  );
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((concatenatedName, name) =>
    concatenatedName.concat(name)
  );
};

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {
  return words.reduce(
    (vowel, word) =>
      (vowel += word
        .split("")
        .filter((letter) => "aeiou".includes(letter))
        .join("")),
    ""
  );
};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"

const capitaliseFirstLetter = (word) => {
  return word.at(0).toUpperCase() + word.slice(1);
};

const makeCamelCase = function (words) {
  return words.reduce(
    (camelCase, word) => camelCase + capitaliseFirstLetter(word)
  );
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"

const reverse = (word) => word.split("").reverse().join("");

const reverseString = function (words) {
  return words.reduce((reversed, word) => reversed + reverse(word), "");
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce(
    (duplicate, number) => [...duplicate, number, number],
    []
  );
};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
// ([[1, 2], [[1], 2], 3, [4]]) => [1,2,[1],2,3,4]

const getConcatenatedArray = (init, array) => {
  return init.concat(array);
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(getConcatenatedArray, []);
};

// flattenArray([[1, [2]], [[3], 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]

const flattenArray = function (arrays) {
  return arrays.reduce((acc, array) => {
    if (Array.isArray(array)) {
      return acc.concat(flattenArray(array));
    }
    return acc.concat(array);
  }, []);
};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((unique, number) => {
    if (!unique.includes(number)) {
      unique.push(number);
    }
    return unique;
  }, []);
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }

const getSum = (object, { category, value }) => {
  object[category] = (object[category] || 0) + value;
  return object;
};

const sumByCategory = function (items) {
  return items.reduce(getSum, {});
};
