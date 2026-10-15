# 🇱🇰 Sri Lanka A/L ICT & GIT Quiz Portal
**Created by G.H. Hirusha thathsidu**

A modern, responsive, and bilingual Web Application built for G.C.E. Advanced Level ICT and General Information Technology (GIT) students in Sri Lanka, equipped with **Vercel Serverless Architecture** and **Real-Time Google Sheets / Excel Auto-Sync**.

---

## 🚀 Live Vercel Deployment & Google Sheets Guide

### Method 1: Deploy to Vercel via GitHub (Recommended & 100% Free)
1. Upload this folder (`e:\git web`) to a new repository on your [GitHub](https://github.com) account.
2. Go to **[vercel.com](https://vercel.com)** and log in.
3. Click **"Add New..."** ➔ **"Project"** and select your GitHub repository.
4. Click **"Deploy"**. Vercel will build and deploy your app with its Serverless APIs (`/api/save-student`) in under 30 seconds!
5. Your live URL will be ready (e.g. `https://al-ict-quiz.vercel.app`).

### Method 2: Deploy to Vercel via Command Line
Open PowerShell in this folder and run:
```bash
npx vercel
```
Follow the quick prompts to log in, and your app will be live immediately!

---

## 📊 How to Set Up Real-Time Google Sheets Auto-Sync (1 Minute)

Whenever a student registers or finishes the 50-question quiz, their **Name, WhatsApp Number, City, Email, and Score** will automatically append as a new row in your private Google Sheet!

1. Open **[sheets.new](https://sheets.new)** in your browser to create a blank Google Sheet.
2. In the top menu, go to **Extensions (දිගු)** ➔ **Apps Script**.
3. Delete any default code in the editor, open the file `google-apps-script.js` from this project (or click **"📋 2. Copy Google Apps Script"** in the Portal's Admin Panel), and paste the code.
4. Click the **Save** (💾) icon.
5. Click **Deploy (යෙදවීම)** ➔ **New deployment**.
6. Click the gear (⚙️) icon next to "Select type" and choose **Web app**.
7. Set:
   - **Execute as:** `Me` (ඔබගේ ගිණුම)
   - **Who has access:** `Anyone` (ඕනෑම අයෙකුට - *අනිවාර්යයි*)
8. Click **Deploy**, grant Google permissions, and copy the generated **Web App URL** (`https://script.google.com/macros/s/.../exec`).
9. Log in to the Quiz Portal as Admin (`thathsiduhirusha@gmail.com` / `760882950`), scroll to the **Google Sheet & Vercel Auto-Sync** card, paste your Web App URL, and click **Save**!
10. Click **"🧪 Test Google Sheet Sync"** to verify. A sample student entry will immediately appear in your Google Sheet!

---

## 🔑 Admin Credentials
- **Admin Email:** `thathsiduhirusha@gmail.com`
- **Admin Password:** `760882950`

---

## 📱 Developer Contacts & Official Channels
- **Developer:** G.H. Hirusha thathsidu
- **WhatsApp Support:** `+94 74 390 9934`
- **Official WhatsApp Channel:** [Join Here](https://whatsapp.com/channel/0029Vb3rPYPJJhzWpXIfsf2p)

© 2026 G.H. Hirusha thathsidu. All Rights Reserved.
