var queue = function(){
  this.queueArray = [];

  this.enqueue = function(num){
    this.queueArray.push(num);
  }

  this.dequeue = function(){
    if(this.queueArray.length==0){
      return "Error: No elements left to dequeue";
    }
    return this.queueArray.shift();
  }

  this.front = function(){
    if(this.queueArray.length==0){
      return "Error: No elements present in Queue.";
    }
    return this.queueArray[0];
  }
  this.isEmpty = function(){
    if(this.queueArray.length==0){
      return true;
    }
    return false;
  }
  this.printQueue = function(){
    console.log(this.queueArray);
  }
}

var queueTest = new queue();
queueTest.queueArray = [4,5,3];
queueTest.enqueue(10);
queueTest.printQueue();
console.log("Dequeued: " + queueTest.dequeue());
console.log("Front of Queue: " + queueTest.front());
console.log("Is Queue Empty: " + queueTest.isEmpty());