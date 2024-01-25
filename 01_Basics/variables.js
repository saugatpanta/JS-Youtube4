const accountId = 144558
let accountEmail = "saugatpanta123@gmail.com"
var accountPassword = "1526456"
accountCity = "Kathmandu"
let accountState;

// accountId = 1 // not allowed

accountEmail = "suminabadarni@mail.com"
accountPassword = "56208562"
accountCity = "Nepal"

accountEmail = "badarni@mail.com"
accountPassword = "56208562"
accountCity = "Africa"

console.log(accountId);

// console.table([accountId, accountEmail, accountCity])
/*
Prefer not to use var
beacause of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

