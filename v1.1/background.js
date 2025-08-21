
let enabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggle) {
    enabled = !enabled;
    chrome.storage.local.set({ enabled });
    sendResponse({ enabled });
  }
});
