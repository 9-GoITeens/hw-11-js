// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат.Вона оголошує два параметри,
//     значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

//     Розвязок
// function checkStorage(available, ordered) {
//     let message;

// if(available < ordered){
// message = "Not enough goods in stock!";
// }else{
//   message = "Order is processed, our manager will contact you.";
// }
//   return message;
// }
