var stack = function(){
  this.stackArray = [];

  this.push = function(num){
    this.stackArray.push(num);
  }

  this.pop = function(){
    if(this.stackArray.length==0){
      return "Error: No elements left in array";
    }
  return this.stackArray.pop();
  }

  this.peek = function(){
    if(this.stackArray.length==0){
      return "Error: No elements present in array";
    }
    return this.stackArray[this.stackArray.length-1];
  }
  this.isEmpty = function(){
    if(this.stackArray.length==0){
      return true;
    }
    return false;
  }

  this.printStack = function(){
    console.log(this.stackArray);
  }

}

var stackTest = new stack();
stackTest.stackArray = [1,2,4];
stackTest.push(5);
stackTest.printStack();
console.log("Peek: " + stackTest.peek());
console.log("IsEmpty: " + stackTest.isEmpty());
console.log("Popped: " + stackTest.pop());

