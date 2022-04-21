// Question no.1
function count(){
    var counter = 0;

    function Inc() {
        return counter += 1;
    };

    return Inc;
}

var counter = count();
alert(count());
alert(count());
alert(count());
alert(count());


// Question no.2
let count = 0;
(function immediate() {
  if (count == 0) 
  {
    let count = 1;
    console.log(count); 
  }
  console.log(count);
})();
//output is  1 0

//Question no. 3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }
  ///Output is three times nos. every after one sec 3 

//Question no.4
// Printing Output

var a1 = 12;
(function () {
  alert(a1);
})();

// Question no. 5
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//Question no. 6
var globalvar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(`
        outerArg = ${outerVar} 
        innerArg = ${innerVar} 
        outerVar = ${outerVar}
        innerVar = ${innerVar}
        globalVar = ${globalVar}`);
    
    })(849);
})(423);


//Question.6 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

const f1 = function(length){
    f2 = function(breadth){
        console.log(`The Area of rectangle is ${length*breadth}`);
    }
}
f1(10);
f2(20);

//Question no. 7 Take a variable in outer function and create an inner function to increase the counter every time

let outer = function(){
    variableCount = 0;
    inner = function(){
        console.log(`the count is ${variableCount+=1}`)
    }
}

outer();
inner();//output 1
inner();//output 2
inner();//output 3
inner();//output 4
inner();//output 5