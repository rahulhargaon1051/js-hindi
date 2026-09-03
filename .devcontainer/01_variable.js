const accountId = 14235
let accountEmail = "taksh@google.com"
var accountPassword ="12345"
accountCity ="jaipur"

// accountId = 2 // not allowed

accountEmail = "taksh.com"
accountPassword = "12312331312"
accountCity = " Bangaluru"
let ccountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in blockscope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])