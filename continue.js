var numbers = [10, 11, 89, 56, 41, 63, 77, 10, 57, 20, 15, 55, 66, 48];

for(var i=0 ; i<numbers.length ; i++ ){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number)
}