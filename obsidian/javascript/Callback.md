# Callback

```javascript
function print(callback){
	callback();
}
```
A function that is passed a to an another function as a parameter is a callback function.

```javascript
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
```


```javascript
let posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}


getPost();
```

# Simple callback function
```javascript
// simple callback function

function greeting(name,callback){
    callback('Hello' + name);
}

greeting('Deepak',(message)=>{
    console.log(message);
})
```

## callback function and arrow function or anonymous function
```javascript
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
```


# Post and get callback func
```javascript
let posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

createPost({title:'Post Three', body: 'This is post three'},getPost);
```