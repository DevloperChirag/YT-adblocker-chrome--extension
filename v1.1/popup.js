
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");

  chrome.storage.local.get("enabled", (data) => {
    button.textContent = data.enabled ? "Disable AdBlocker" : "Enable AdBlocker";
  });

  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ toggle: true }, (response) => {
      button.textContent = response.enabled ? "Disable AdBlocker" : "Enable AdBlocker";
    });
  });
});
