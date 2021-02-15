console.log('Space of the world');

let filenames = [
                "01.jpg",
                "02.jpg",
                "03.jpg"
            ];

let imgs = document.getElementsByTagName('img');

for (i of imgs){
    console.log(i.scr);
}
// for (img of imgs){
//     console.log(img.scr);
//     let r = Math.floor(Math.random() * filenames.length);
//     let file = 'img' + filenames[r];
//     let url =chrome.extension.getURL(file); 
//     img.scr = url;
//     console.log(url);
// }