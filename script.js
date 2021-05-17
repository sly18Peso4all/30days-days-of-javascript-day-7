//Exercises: Level 1
/*
1) Declare a function fullName and it print out your full name.

2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

3) Declare a function addNumbers and it takes two two parameters and it returns sum.

4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

5) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

7) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

9) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

10) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

11) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

12) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

14) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

15) Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

// Solution  1
function fullName() {
  let firstName = "Peter";
  let lastName = "Andrew";
  console.log(`${firstName} ${lastName}`);
}
fullName();

// Solution 2
function printFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

printFullName("Dave", "Mark");

// Solution 3
function addNumber(num1, num2) {
  return num1 + num2;
}

console.log(addNumber(8, 10));

// Solution 4
function calculateAreaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(calculateAreaOfRectangle(5, 7));

// Solution 5
function calculatePerimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(calculatePerimeterOfRectangle(18, 2));

// Solution 6
function calculateVolOfRecPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(calculateVolOfRecPrism(4, 5, 6));

// Solution 7
function calculateAreaOfCircle(r, π = 3.142) {
  let area = π * r ** 2;
  return area;
}
console.log(calculateAreaOfCircle(4));

// Solution 8
const circleOfCircumference = function (r, π = 3.142) {
  let circumference = 2 * π * r;
  return circumference;
};

console.log(circleOfCircumference(7));

// Solution 9
const calcDensity = (mass, volume) => {
  let density = mass / volume;
  return density;
};
console.log(calcDensity(422, 21));

// Solution 10
const speedOfMovingObject = (distance, time) => {
  let speed = distance / time;
  return speed;
};
console.log(speedOfMovingObject(1000, 60));

// Solution 11
function calculateWeightOfSubstance(mass, gravity = 9.81) {
  let weight = mass / gravity;
  console.log(weight);
}
calculateWeightOfSubstance(30);

// Solution 12

const convertCelciusToFahrenheit = (C) => {
  let fahrenheit = (C * 9) / 5 + 32;
  return fahrenheit;
};
console.log(convertCelciusToFahrenheit(60));

// Solution 13
function calBMI(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight");
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal Weight");
  }
  if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
  }
  if (bmi > 30) {
    console.log("Obese");
  }
}

calBMI(75, 1.85);

// Solution 14
function checkSeason(month) {
  let monthCheck = month.toLowerCase();
  if (
    monthCheck == "decemeber" ||
    monthCheck == "january" ||
    monthCheck == "feburary"
  ) {
    console.log("Winter is here");
  } else if (
    monthCheck == "march" ||
    monthCheck == "april" ||
    monthCheck == "may"
  ) {
    console.log("its spring Time");
  } else if (
    monthCheck == "june" ||
    monthCheck == "july" ||
    monthCheck == "august"
  ) {
    console.log("Summer Time");
  } else if (
    monthCheck == "september" ||
    monthCheck == "october" ||
    monthCheck == "november"
  ) {
    console.log("Autmn time");
  }
}

checkSeason("october");

// Solution 15
function checkLargestNumber(...arg) {
  let largestNumber = Math.max(...arg);
  console.log(largestNumber);
}

checkLargestNumber(3, 8, 88, 192);

//Exercises: Level 2
/*
1) Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

3) Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08

5)Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
6) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

7) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

8) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

10) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

11) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

12) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
14) Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
15) Writ a function which generates a randomUserIp.

16) Write a function which generates a randomMacAddress

17) Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
18) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/

console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise 2=============");

// Solution 1 and 2
function calQuad(a, b, c) {
  let squareRoot = b * b - 4 * a * c;

  let minus = (-b - Math.sqrt(squareRoot)) / (2 * a);
  let plus = (-b + Math.sqrt(squareRoot)) / (2 * a);
  console.log(minus, plus);
}

calQuad(1, 4, 4);
calQuad(1, -1, -2);
calQuad(1, 7, 12);
calQuad(1, 0, -4);
calQuad(1, -1, 0);

// Solution 3
function printArray(word) {
  let arrWord = word.split(" ");
  console.log(arrWord);
}

printArray("I am Smart and a Genius");

// Solution 4
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay() + 1;
  const hour = now.getHours();
  const minutes = now.getMinutes();

  // check if value < 10
  const mo = month < 10 ? `${"0" + month}` : `${month}`;
  const da = day < 10 ? `${"0" + day}` : `${day}`;
  const hr = hour < 10 ? `${"0" + hour}` : `${hour}`;
  const mins = minutes < 10 ? `${"0" + minutes}` : `${minutes}`;

  console.log(`${da}/${mo}/${year} ${hr}:${mins}`);
}

showDateTime();

// Solution 5

function swap(a, b) {
  return [b, a];
}

swapValues(6, 7);

// Solution 6
function reverseArray(arr) {
  let reversed = arr.reverse();
  console.log(reversed);
}

reverseArray([1, 2, 3, 7]);
reverseArray(["a", "b", "c"]);

// Solution 7
function capitalizeArray(arr) {
  let capitalWord = arr.join("").toUpperCase().split(" ");
  console.log(capitalWord);
}

capitalizeArray(["jungle"]);

// Solution 8
function addItem(...item) {
  let arrItem = [...item];
  console.log(arrItem);
}
addItem("orange", "mango", "grape");

// Solution 9
function removeItem(...index) {
  let arrIndex = [...index];
  let remo = arrIndex.pop();
  console.log(arrIndex);
}

removeItem("orange", "banana", "apples");

// Solution 10
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4));

// Solution 11
const sumEvenNumber = (...args) => {
  let sum = 0;
  for (const el of args) {
    if (el % 2 === 0) {
      sum += el;
    }
  }
  return sum;
};

console.log(sumEvenNumber(1, 2, 3, 4, 6));

// Solution 12
const sumOddNumber = (...args) => {
  let sum = 0;
  for (const el of args) {
    if (!(el % 2 === 0)) {
      sum += el;
    }
  }
  return sum;
};

console.log(sumOddNumber(1, 2, 3, 4, 6));

//Solution 13
function fun(...nums) {}

fun(100);

// Solution 14
console.log(sumAllNums(1, 2, 3, 5, 7, 8));
console.log(sumAllNums(10, 34, 45, 6, 66));

//Solution 15
function generateUserId() {
  let randomNum = Math.random().toString(16).slice(2, 10);
  let userId = randomNum;
  console.log(userId);
}

generateUserId();

// Solution 16

generateUserId();

// Solution 17
function generateRandomHexaNumber() {
  let randomNum = Math.random().toString(16).slice(2, 8);
  let Id = `${"#" + randomNum}`;
  console.log(Id);
}

generateRandomHexaNumber();

// Solution 18

console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise  3 =============");

//Exercises: Level 3
/*
1)Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
2) Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
3) Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

4) Write a function arrayOfRgbColors which return any number of RGB colors in an array.

5) Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

6) Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

7) Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
8) Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

9) Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

10) Call your function isEmpty, it takes a parameter and it checks if it is empty or not

11) Call your function sum, it takes any number of arguments and it returns the sum.

12) Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

13) Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

14) Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'

15)  Write a function called isPrime, which checks if a number is prime number.

16) Write a functions which checks if all items are unique in the array.

17) Write a function which checks if all the items of the array are the same data type.

18) JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

19) Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
20) Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
*/

// Solution 1
/*
function userIdGeneratedByUser() {
  const getNumOfChars = Number(prompt("Enter the Number of characters"));
  const getNumOfID = Number(prompt("Enter the Number of ID"));

  if (getNumOfChars > 25) return;
  const randomID = Math.random().toString(36).slice(-getNumOfChars);

  for (let i = 1; i <= getNumOfID; i++) {
    console.log(`${i + randomID} ${randomID}`);
  }
}

userIdGeneratedByUser();*/

// Solution 2
function randomNumber() {
  let min = 0;
  let max = 255;

  return Math.floor(Math.random() * max - min) + min;
}

function rgbColorGenerator() {
  let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  console.log(randomColor);
}
rgbColorGenerator();

//Solution 3
function arrayHexaColor() {
  let ranNumber = Math.random().toString(16).slice(-6);

  let hexaNumber = `#${ranNumber}`;
  let arr = [];

  arr.push(hexaNumber);
  return arr;
}
console.log(arrayHexaColor());

// Solution 4
function arrayOfRgbColors() {
  let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  let arr = [];
  arr.push(randomColor);
  console.log(arr);
}
arrayOfRgbColors();

// Solution 5
/*When using parseInt, it makes sense to always pass the radix parameter. For decimal conversion, that is 10. This is the default value for the parameter, which is why it can be omitted. 
For binary, it's a 2 and 16 for hexadecimal. Actually, any radix between and including 2 and 36 works.*/
function convertHexaToRgb(color) {
  /*  var r = parseInt(hex.substring(1, 3), 16); */
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  console.log(`rgb (${r},${g},${b})`);
}
convertHexaToRgb("#f2f3f4");

// Solution 6
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function convertRgbToHexa(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(b)}${componentToHex(g)}`;
}

console.log(convertRgbToHexa(234, 17, 17));

// Solution 7
function generateColors() {}

// Solution 8
function shuffleArray(arr) {
  //////////////////// IMPORTANT
  let shuffled = arr.sort(() => Math.random() - 0.5);
  console.log(shuffled);
}

shuffleArray([2, 4, 5, 5, 4]);

// Solution 9
function factorial(n) {
  let sum = 1;
  if (n >= 2) {
    for (let i = 1; i <= n; i++) {
      sum *= i;
    }
    console.log(sum);
  } else {
    console.log(n);
  }
}

factorial(5);

// Solution 10
function isEmpty(n) {
  console.log("function is Empty");
}

isEmpty(2);

// Solution 11
function sum(a, b) {
  console.log(a + b);
}

sum(8, 23);

// Solution 12
function sumOfArrayItems(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  console.log(sum);
}

sumOfArrayItems([2, 4, 6]);

// Solution 13
function average(arr) {
  let arrLength = arr.length;
  let sum = 0;
  for (const item of arr) {
    sum += item / arrLength;
  }
  console.log(sum);
}

average([2, 4, 6]);

// Solution 14
function modifyArray(arr) {
  let arrLen = arr.length;
  if (arrLen > 5) {
    arr[4].toUpperCase();
    return arr;
  } else return "arr not found";
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

// Solution 15
function isPrime(n) {
  return n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0
    ? "is not Prime"
    : " a prime";
}
// const isPrime = (num) => {
//   for (let i = 2; i < num; i++) if (num % i === 0) return false;
//   return num > 1;
// };

console.log(isPrime(25));
