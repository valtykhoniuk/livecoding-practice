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
