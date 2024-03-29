chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
      chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["src/content.js"]
      })
      .then(() => {
          console.log("Injected content script.");
      })
      .catch(err => console.log(err));
  }
});