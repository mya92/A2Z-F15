// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the background script for the extension

// Listening for messages
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  // Showing the page action if the content script says to
  if (request.message === "show_page_action") {
    chrome.pageAction.show(sender.tab.id);
  }
}