# 🎯 Simple YouTube Ad Blocker (Chrome Extension)

A lightweight Chrome extension that **skips and removes YouTube ads** (video ads, banner ads, and overlay ads).  
Works on **Chrome (Desktop)** and **Kiwi Browser (Android)**.  

---

## 🚀 Features
- ⏭️ Automatically **skips video ads** on YouTube.  
- ❌ Removes **banner ads and overlays**.  
- 🚫 Blocks requests to common ad domains.  
- ⚡ Lightweight and **open-source** (no trackers, no data collection).  
- 🖥️ Works on **desktop browsers** (Chrome, Brave, Edge).  
- 📱 Works on **Android** via **Kiwi Browser** (supports Chrome extensions).  

---

## 📂 Project Structure
```
yt-adblocker/
│── manifest.json      # Extension configuration
│── content.js         # Script to skip/remove ads
│── background.js      # Background service worker
│── rules.json         # Network blocking rules
│── icons/             # Extension icons (16x, 48x, 128x)
```

---

## 🔧 Installation Guide

### 🖥️ Desktop (Chrome / Edge / Brave)
1. Clone or download this repository:  
   ```bash
   git clone https://github.com/your-username/yt-adblocker.git
   ```
   Or download the ZIP and extract it.  

2. Open Chrome and go to:  
   ```
   chrome://extensions/
   ```

3. Enable **Developer mode** (top-right corner).  

4. Click **Load unpacked** and select the extracted folder (`yt-adblocker/`).  

5. Open YouTube → ads should now be skipped/removed 🎉.  

---

### 📱 Android (Kiwi Browser)
1. Install **[Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)**.  

2. Open Kiwi → go to **Extensions**.  

3. Enable **Developer Mode**.  

4. Tap **Load Unpacked** → Select the extracted folder.  

5. Open YouTube in Kiwi → ads gone 🎉.  

---

## ⚠️ Limitations
- ❌ Not supported on **Chrome Mobile** (Google blocks extensions there).  
- 🔄 YouTube frequently updates its ad system → extension may need updates.  
- ⚠️ This is a **basic ad blocker** — for advanced blocking, use [uBlock Origin](https://github.com/gorhill/uBlock).  

---

## 📜 License
This project is open-source under the **MIT License**.  
You are free to use, modify, and share it.  

---

## 🙌 Contributing
Contributions are welcome!  

1. Fork the repo.  
2. Create a new branch (`feature-xyz`).  
3. Commit your changes.  
4. Open a Pull Request.  

---

## ⭐ Support
If you find this project useful, consider giving it a **star ⭐** on GitHub!  
That helps others discover it and motivates future updates.  
