var arr = [1,2,3];

arr[0]  //1
arr[1] //2
arr[2]  //3

 function firstLast6(array){
    var first = array[0];
    var last =  array[array.length-1];
    if( first == 6){
        return true;
    }
    if( last == 6){
        return true;
    } else {
        return false;
    }
}

 function has23(array){
    var first = array[0];
    var last = array[array.length-1]
    if( first == 2 || first == 3){
        return true;
    }
    if( last == 2 || last == 3){
        return true;
    } else {
        return false;
    }
}

 function fix23(arr){

    if(arr[0] == 2 && arr[1] == 3){
        arr[1] = 0;
    }
    if(arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
    }
    return arr;

}

 function countYZ(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " " && str[i - 1] == "y") {
            count = count + 1;
        }
        if (str[i] == " " && str[i - 1] == "z") {
            count = count + 1;
        }
    }
    var lastOne = str.length - 1;
    if (str[lastOne] == "y") {
        count = count + 1;
    }
    if (str[lastOne] == "z") {
        count = count + 1;
    }
    return count;
}

 function endOther(str, abc){
    str = str.toLowerCase();
    abc = abc.toLowerCase();
    if(str.endsWith(abc) == true){
        return true;
    }
    if(abc.endsWith(str) == true){
        return true;
    } else {
        return false;
    }
}

 function starOut(str){
    var answerWord = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] != "*" && str[i - 1] != "*" && str[i + 1] != "*") {
            answerWord = answerWord + str[i];
        }
    }
    return answerWord;
}

function getSandwich(str) {
    var sand = '';
    var bread1 = str.indexOf("bread")
    var bread2 = str.lastIndexOf("bread")
    if(bread1 != bread2){
        sand += str.substring(bread1 + 5, bread2);
    }
    return sand;
}

function canBalance(arr){
    var outerSum = 0;
    var innerSum = 0;
    for(var i = 0; i< arr.length; i++) {

        outerSum += arr[i];

        for (var j = i+1; j < arr.length; j++) {
            innerSum += arr[j];
        }
        if(outerSum == innerSum) {
            return true;
        }
        innerSum = 0;
    }

    return false;
}

function countClumps(arr){
    var count = 0;

    for(var i = 0; i<arr.length; i++ ){
        if(arr[i-1]== arr[i] && arr[i]!= arr[i+1]){
            count += 1
        }
    }
    return count;
}

function evenlySpaced(int1, int2, int3){
    if(Math.abs(int2 - int1) == Math.abs(int3 - int2)){
        return true;
    }
    if(int1 - int3 == int2-int1) {
        return true;
    }
    if(int3-int2 == int1-int3){


        return true;
    }else{
        return false;
    }

}

