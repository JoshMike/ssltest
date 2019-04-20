chrome.browserAction.onClicked.addListener(function(tab) {
    let url =
        'https://ssllabs.com/ssltest/analyze.html?d=' + tab.url;
    chrome.tabs.create({url: url, index: tab.index + 1});
});