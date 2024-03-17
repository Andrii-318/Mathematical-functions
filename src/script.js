// Завдання 1: Середнє арифметичне числових елементів масиву
function calculateAverage() {
  const arrayInput = document.getElementById("arrayInput").value;
  const array = arrayInput.split(",").map((item) => item.trim());
  const numbers = array
    .filter((item) => !isNaN(item) && item !== "")
    .map(Number);
  const average =
    numbers.reduce((acc, val) => acc + val, 0) / numbers.length || 0;
  document.getElementById("averageResult").innerText = "Середнє: " + average;
}

// Завдання 2: Виконання математичної операції
function performOperation() {
  const x = parseFloat(document.getElementById("mathX").value);
  const znak = document.getElementById("mathZnak").value;
  const y = parseFloat(document.getElementById("mathY").value);
  let result;
  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = y !== 0 ? x / y : "Ділення на нуль!";
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x, y);
      break;
    default:
      result = "Невідома операція";
  }
  document.getElementById("operationResult").innerText = "Результат: " + result;
}

// Завдання 3: Заповнення двомірного масиву
function fillArray() {
  const mainLength = parseInt(document.getElementById("arrayLength").value, 10);
  const subLength = parseInt(
    document.getElementById("subArrayLength").value,
    10
  );
  const values = document
    .getElementById("arrayValues")
    .value.split(",")
    .map((item) => item.trim());
  const result = new Array(mainLength)
    .fill(null)
    .map(() =>
      new Array(subLength)
        .fill(null)
        .map((_, index) => values[index % values.length] || null)
    );
  document.getElementById("arrayResult").innerText =
    "Масив: " + JSON.stringify(result);
}

// Завдання 4: Видалення заданих символів з рядка
function removeCharacters() {
  const string = document.getElementById("stringInput").value;
  const charsToRemove = document
    .getElementById("charsToRemove")
    .value.split("")
    .map((item) => item.trim());
  const result = string
    .split("")
    .filter((char) => !charsToRemove.includes(char))
    .join("");
  document.getElementById("stringResult").innerText =
    "Рядок після видалення: " + result;
}
