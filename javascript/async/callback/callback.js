// simple callback function

function greeting(name,callback){
    callback('Hello' + name);
}

greeting('Deepak',(message)=>{
    console.log(message);
})

// second simple callback function

// function
function greet(name, callback){
    console.log("Hi" + " " + name);
    callback(name);
}

// callback function
function callMe(name){
    console.log(name.toUpperCase());
}

// passing function as an argument
greet('deepak',callMe);


// callback function using anonymous function

// function
function greet(name,callback){
    console.log('Hi ', name);
    callback(name);
}

greet('deepak',(name)=>{
    console.log(name.toUpperCase());
})