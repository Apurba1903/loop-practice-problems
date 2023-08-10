var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits)

var banana = fruits.indexOf('Banana');
console.log('The index of banana is',banana)

var mango = fruits[banana];
fruits[banana] = 'Mango';
console.log(fruits)

/* var orange = fruits.indexOf('Orange');
var watermelon = fruits [orange];
fruits [orange] = 'Watermelon';
console.log(fruits)
 */

fruits.pop();
console.log(fruits)
fruits.push('Watermelon');
console.log(fruits)