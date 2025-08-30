// 1) Напиши функцію unique(arr), яка повертає масив без дублікатів.
function unique(arr) {
  return [...new Set(arr)];
}

// 2) Напиши функцію flatten(arr), яка перетворює вкладені масиви на плоский масив.
function flatten(arr) {
  const result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

// 3) Реалізуй deepClone(obj) для глибокого копіювання об’єктів та масивів.
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      result.push(deepClone(item)); // рекурсія для кожного елемента
    }
    return result;
  } else {
    const result = {};
    for (const key in obj) {
      result[key] = deepClone(obj[key]);
    }
    return result;
  }
}

// 4) Напиши функцію, що підраховує кількість входжень символів у рядку.
function countSymbolTimes(str, el) {
  return str.split("").filter((char) => char === el).length;
}

// 5) Перевір, чи рядок є паліндромом.
function isPalyndrome(str) {
  if (!Array.isArray(str)) {
    str = str.split("");
  }

  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalyndrome(str.slice(1, str.length - 1));
}

// 6) Відсортуй масив об’єктів за числовим полем age.
function sortByAge(objectsArray) {
  return objectsArray.sort((a, b) => a.age - b.age);
}

// 7) Знайди найбільший та найменший елемент масиву без використання вбудованих методів.
function findMixMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

// 8) Напиши функцію chunk(arr, size), що розбиває масив на частини заданого розміру.
function chunk(arr, size) {
  let chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
}

// 9) Реалізуй debounce або throttle функцію.
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 9) Реалізуй debounce або throttle функцію.
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 10) Напиши функцію, що повертає перші n чисел Фібоначчі.
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let result = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result;
}

// 11) Підрахуй суму всіх чисел у масиві, використовуючи reduce.
function sumNums(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  });
}

// 12) Реалізуй власну версію Promise.all через async/await.
async function myPromiseAll(promises) {
  const results = [];

  for (let i = 0; i < promises.length; i++) {
    const promise = Promise.resolve(promises[i]);

    try {
      results[i] = await promise;
    } catch (error) {
      throw error;
    }
  }
  return results;
}

// 13) Напиши функцію capitalizeWords(str), що робить великою першу букву кожного слова.
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// 14) Перевір, чи два рядки є анаграмами один одного.
function checkAnnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lettersStr1 = str1.split("");
  let lettersStr2 = str2.split("");
  for (let letter of lettersStr1) {
    const index = lettersStr2.indexOf(letter);
    if (index !== -1) {
      lettersStr2.splice(index, 1);
    } else {
      return false;
    }
  }
  return lettersStr2.length === 0;
}

//callstack
console.log(unique([1, 2, 2, 3, 4, 4, 5]));
console.log(
  flatten([
    [1, 2, 4],
    [5, 3, 2],
  ])
);
console.log(deepClone([[1, 2], 4]));
console.log(countSymbolTimes("devopso", "o"));
console.log(isPalyndrome("aopupoa"));
console.log(
  sortByAge([
    { age: 5, name: "Bob" },
    { age: 8, name: "Alice" },
    { age: 9, name: "Nicole" },
  ])
);
let arr = [5, 1, 3, 9, 1, 2, 5];
console.log("Max: " + findMixMax(arr)[1] + ", min: " + findMixMax(arr)[0]);
console.log(chunk(arr, 3));
console.log(fibonacci(5));
console.log("Sum: " + sumNums(arr));
let str = "the console.log() static method outputs a message to the console";
console.log(capitalizeWords(str));
console.log(checkAnnagram("abob", "obab"));
