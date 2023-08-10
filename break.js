/* for (var i=1 ; i<=20 ; i++){
    
    if(i > 5){
        break;
    }
    console.log(i);
} */



/* var roastGiven = 0;
while (roastGiven < 10){
    console.log('Roast den, Gift ansi');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
} */


/* var tableItems = ['Computer', 'Keyboard', 'Mouse', 'Water Bottle', 'Notes', 'Kobutor'];
for (var i=0 ; i < tableItems.length ; i++){
    var item = tableItems[i];
    if(item == 'Mouse'){
        break;
    }
    console.log(item)
} */


var numbers = [10, 11, 89, 56, 41, 63, 77, 110, 57, 20, 15, 55, 66, 48, 500, 50];

for(var i=0 ; i<numbers.length ; i++ ){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number)
}