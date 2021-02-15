console.log("background-running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        message: "user clicked!"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}