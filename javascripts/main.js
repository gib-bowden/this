console.log(this); 

var b = 30; 
let c = 60; 

this.a = 37;
console.log(window.a);
console.log(this.b, this.c);


var fubar = "42";

function baz() {
    console.log("baz");
    bar();
};

function bar() {
    console.log("bar");
    foo();
};


function foo() {
    var ubar = "13";
    console.log("foo");
    console.log("this", this); //window
    console.log("this.fubar", this.fubar); // 42

};

baz(); 


//event listeners 

$('#my-button').click(function(e){
    console.log(e);
    console.log("e.target", e.target);
    console.log("this", this); //same as e.target
})


document.getElementById("my-button").addEventListener("click", function (e) {
    console.log(e);
    console.log("e.target", e.target);
    console.log("this", this); //same as e.target
});


// var a = 3;

// function foo(){
//     console.log("this", this);
//     console.log("this.a", this.a);
// }

// var obj = {
//     a: 2,
//     monkey: foo
// };

// obj.monkey(); //this is 2 b/c the "call site" is within the object, where a is 2; 


//Example 3

// function foo() {
//     console.log("this", this);
//     console.log("this.a", this.a);
// }

// var obj2 = {
//     a: 42,
//     foo: foo
// };

// var obj1 = {
//     a: 2,
//     obj2: obj2
// };

// obj1.obj2.foo(); 


function foo() {
    console.log("this", this);
    console.log("this.a", this.a);
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo;

var a = "global warming"; 

obj.foo(); 
bar(); 