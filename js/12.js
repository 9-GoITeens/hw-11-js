// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) 
// складає і повертає повідомлення про покупку ремонтних дроїдів.Вона оголошує три параметри,
// значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала 
// повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// Не забудь про ціну доставки в обчисленнях загальної вартості.

//     Розвязок
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
    
//   return message;
// }