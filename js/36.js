// Функція checkForSpam(message) приймає рядок(параметр message),
// перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
// Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;

//   const normalizedMessage = message.toLowerCase();
//   result =
//     normalizedMessage.includes('spam') || normalizedMessage.includes('sale');

//   return result;
// }
