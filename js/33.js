// Функція formatMessage(message, maxLength) приймає рядок(параметр message) і форматує його,
// якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...",
// після чого повертає скорочену версію.

//     Розвязок
//     function formatMessage(message, maxLength) {
//   let result;

//   result =
//     message.length > maxLength ? `${message.slice(0, maxLength)}...` : message;

//   return result;
// }
