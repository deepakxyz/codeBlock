/// Search function

let inp = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');

const search = document.getElementById("search-btn");

search.addEventListener("click", e => {
  e.preventDefault();
  // youtube search
  if(inp.value.endsWith(':y')){
    let s = inp.value.replace(':y','');
    s = s.replace(' ','+');
    let youtube = `https://www.youtube.com/results?search_query=${s}`;
    window.location= youtube;
  }
  // artstation search
  else if(inp.value.endsWith(':a')){
    let s = inp.value.replace(':a','');
    s = s.replace(' ','%20');
    let artstation =`https://www.artstation.com/search?q=${s}`; 
    window.location = artstation;
  }
  // pinterest search
  else if(inp.value.endsWith(':p')){
    let s = inp.value.replace(':p','');
    s = s.replace(' ','%20');
    let pinterest = `https://in.pinterest.com/search/pins/?q=${s}`;
    window.location = pinterest;
  }
  // google search
  else {
    let s = inp.value;
    let google = `https://www.google.com/search?ei=HSu0X4T0AZv8rQHDsJ2gBQ&q=${s}&oq=${s}`;
    window.location= google;
  } 
}); 


// Set time
const timeElement = document.querySelector(".time");
var time = new Date();
var hour;
var minutes;
if(time.getHours() < 10){
  hour = '0' + time.getHours();
} else{
  hour = time.getHours();
}
if(time.getMinutes() < 10){
  minutes = '0' + time.getMinutes();
} else{
  minutes = time.getMinutes();
}
var current_time = hour + ":" + minutes;
timeElement.innerText = current_time;