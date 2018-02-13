/*

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), 
your program would output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/


//recursion
// function numberOfWays(amountLeft, denominations, idx) {
//     idx = (typeof idx !== 'undefined') ? idx : 0;

//     // base cases:
//     // we hit the amount spot on. yes!
//     if (amountLeft === 0) return 1;

//     // we overshot the amount left (used too many coins)
//     if (amountLeft < 0) return 0;

//     // we're out of denominations
//     if (idx === denominations.length) return 0;

//     console.log(`checking ways to make ${amountLeft} with [${denominations.slice(idx).join(', ')}]`);

//     // choose a current coin
//     var currentCoin = denominations[idx];

//     // see how many possibilities we can get
//     // for each number of times to use currentCoin
//     var options = 0;
//     while (amountLeft >= 0) {
//         options += numberOfWays(amountLeft,
//             denominations, idx + 1);
//         amountLeft -= currentCoin;
//     }
//     console.log(options);
//     return options;
// }

function numberOfWays(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var ways = [];
    for (var i = 0; i <= amount; i++) {
        ways[i] = 0;
    }
    ways[0] = 1;

    denominations.forEach(function(coin) {
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var remainder = higherAmount - coin;
            ways[higherAmount] += ways[remainder];
        }
    });
    console.log(ways, ways[amount]);
    return ways[amount];
}
numberOfWays(5, [1, 2, 3]);

