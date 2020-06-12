//boolean variables:

let isHotOutside = true;
let isWeekDay = true;
let hadMoneyInPocket = false;

//non-boolean variables:

let costOfMilk = 2.50;
let moneyInWallet = 20.00;
let thirstLevel = 7;

//boolean variables:

let shouldBuyIcecream = isHotOutside && hadMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekDay;
let isAGoodDay = isHotOutside && hadMoneyInPocket && !isWeekDay;
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;

//logging values to the console:

console.log('Is it hot outside?', isHotOutside);
console.log('Is it a weekday?', isWeekDay);
console.log('Do you have money?', hadMoneyInPocket);

console.log('Cost of Milk: $', costOfMilk);
console.log('Amount of money in wallet: $', moneyInWallet);
console.log('Level of thirst:', thirstLevel, '/10');

console.log('Was icecream bought?', shouldBuyIcecream);
console.log('Did you go swimming?', willGoSwimming);
console.log('Is it a good day?', isAGoodDay);
console.log('Was milk bought?', willBuyMilk);


