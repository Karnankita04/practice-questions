const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

const testCases = [[filterEvenNumbers, [1, 2, 3, 4, 5], [2, 4]]];

const areArrayEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function (arr1Element, index) {
    return array2[index] === arr1Element;
  });
};

const getMark = function (actual, expected) {
  return areArrayEqual(actual, expected) ? '✅' : '❌';
};

const somefunction = function (result, testCase) {
  const [func, input, expected] = [...testCase];
  const actual = func(input);
  const mark = getMark(actual, expected);

  result.push(mark, func, actual, expected);
  return result;
};

function testAll() {
  return testCases.reduce(somefunction, []);
}

console.log(testAll());