chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target : {tabId: tab.id},
        func : () => {
            alert("Ubuntu service-worker.js 😎")
        }
    })
})