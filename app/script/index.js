async function main() {
    let [tab] = chrome.tabs.query({active : true});
    chrome.scripting.executeScript({
        target :    {tabId : tab.id},
        fun : () => {
            // everything here points to the actual page
            // ex. document.body points to actual active tab body
            alert("Ubuntu index.js")
        }
    })
}
// points to the extension 
document.getElementById('button').addEventListener('click', main)