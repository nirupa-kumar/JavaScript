var binarySearch = function(num,inputArray){
  var minIndex = 0;
  var maxIndex = inputArray.length-1;
  var currIndex;
  var currElement;
  while(minIndex<=maxIndex){
    currIndex = (maxIndex-minIndex)/2|0;
    currElement = inputArray[currIndex];
    if(num<currElement){
      maxIndex = currIndex-1;
    }else if(num>currElement){
      minIndex = currIndex+1;
    }
    else{
    return currIndex;
    }
  }
return -1;
}