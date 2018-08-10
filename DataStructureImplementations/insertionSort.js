var insertionSort = function(unsorted){
  for(var i=0;i<unsorted.length;i++){
    var temp = unsorted[i];
    j=i-1;
    while((j>=0)&&(unsorted[j]>temp)){
      unsorted[j+1]=unsorted[j];
      j--;
    }
    unsorted[j+1] = temp;
  }

  return unsorted;
}

console.log(insertionSort([2,5,7,4,8,10]));