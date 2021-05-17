// background.js talks with foreground.js
let activeTabId = 0;
// When the chrome extension has been restarted or installed
chrome.tabs.onActivated.addListener(tab => {
    // 
    chrome.tabs.get(tab.tabId, currentTabInfo => {
        activeTabId = tab.tabId;

        if (/^https:\/\/www\.google/.test(currentTabInfo.url)) {
            chrome.tabs.insertCSS(null, { file: './mystyles.css' });
            chrome.tabs.executeScript(null, { file: 'src/foreground.js' }, () => console.log('i injected'))
        }
    });
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
});