console.log("Chrome Extension ready to go!!");



chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse){
    if(request.message === "user clicked!"){
        console.log("User Clicked");
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs){
            elt.style['background-color'] = "#000000";
        }
    }
}