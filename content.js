function skipAds() {
  // Skip video ads
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) skipButton.click();

  // Remove banner ads
  document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-module')
          .forEach(el => el.remove());
}

// Run every second
setInterval(skipAds, 1000);