function feetToMile(feet){
    return feet/5280;

}

 var mile =feetToMile(5280);

 console.log(mile); 
 // 1st task done

 var nameOfAllStu = ['tanvir', 'sajib', 'istiak', 'imu', 'haidaz'];

 function tinyName(str){
    var arr = nameOfAllStu;
    var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
    return min;
}

var stuNo =tinyName();
var showName = nameOfAllStu[stuNo];
console.log(showName);  
// 4th task done

function woodCalculator(chair, table, bed){
    var totalWood = chair*1 + table*3 + bed*5;
    return totalWood;

}

var totalWoodNeed = woodCalculator(2,5,2);
console.log(totalWoodNeed);
// 2nd task done 

function brickCalculator(i){
    if(i<=10){
        var totalBrickU10= i*15*1000;
        return totalBrickU10;
    }
    else if( i>10 && i<=20){
        var totalBrickU20= (10*15*1000)+ (i-10)*12*1000;
        return totalBrickU20;
    }
    else{
        var totalBrick= (10*15*1000)+(10*12*1000)+(i-20)*10*1000;
        return totalBrick;

    }
}


var brickNeed= brickCalculator(15);
console.log(brickNeed);

// 3rd task completed


//end of assignment number 3 . happy coding




