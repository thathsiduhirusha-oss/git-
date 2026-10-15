/**
 * GOOGLE APPS SCRIPT - GOOGLE EXCEL SHEET AUTO-SYNC SCRIPT
 * Developed for: Sri Lanka A/L ICT & GIT Quiz Portal
 * Creator: G.H. Hirusha thathsidu
 * 
 * HOW TO SET UP (පියවරෙන් පියවර උපදෙස්):
 * 1. Open Google Sheets: Go to https://sheets.new and create a new Google Sheet.
 * 2. Name your sheet: e.g. "A/L ICT & GIT Quiz Students Registry"
 * 3. Open Script Editor: Click 'Extensions' (දිගු) > 'Apps Script'.
 * 4. Paste this entire code: Delete any sample code in Code.gs and paste all of this.
 * 5. Click 'Save' (💾 icon).
 * 6. Deploy: Click 'Deploy' (යෙදවීම) > 'New deployment'.
 * 7. Choose type: Click the gear (⚙️) icon next to 'Select type' and select 'Web app'.
 * 8. Configuration:
 *    - Description: "Quiz Portal Auto Sync"
 *    - Execute as: "Me" (ඔබගේ ගිණුම)
 *    - Who has access: "Anyone" (ඕනෑම අයෙකුට - Very Important!)
 * 9. Click 'Deploy', authorize Google permissions if asked.
 * 10. Copy the Web App URL (e.g. https://script.google.com/macros/s/AKfycb.../exec)
 * 11. Paste that URL into the Admin Dashboard of your Quiz Portal!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    
    // Set sheet name if default
    if (sheet.getName() === "Sheet1") {
      sheet.setName("Students Registry");
    }

    // Auto-setup headers if sheet is empty
    setupHeadersIfNeeded(sheet);

    // Parse incoming payload
    var raw = e.postData.contents;
    var data = JSON.parse(raw);

    // Extract student data
    var student = data.student || data;
    var timestamp = student.timestamp || new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    var event = data.event || student.event || "Student Registration";
    var name = student.name || "N/A";
    var whatsapp = student.whatsapp || "";
    var email = student.email || "N/A";
    var city = student.city || "N/A";
    var score = student.score !== undefined && student.score !== null ? student.score : "Pending Quiz";
    var percentage = student.percentage ? (student.percentage + "%") : "N/A";
    var grade = student.grade || "N/A";

    // Format WhatsApp with a single quote prefix so Google Sheets doesn't strip + or leading 0
    var formattedWhatsapp = "'" + whatsapp;

    // Append new student record row
    sheet.appendRow([
      timestamp,
      event,
      name,
      formattedWhatsapp,
      email,
      city,
      score,
      percentage,
      grade
    ]);

    // Format latest row
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, 9);
    rowRange.setFontFamily("Arial");
    rowRange.setFontSize(10);
    rowRange.setVerticalAlignment("middle");

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Student record appended to Google Sheet successfully!",
      row: lastRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "Sri Lanka A/L ICT & GIT Quiz Portal Google Sheets Connector",
    creator: "G.H. Hirusha thathsidu",
    whatsapp: "+94743909934",
    instructions: "Send POST request with student details JSON payload to log new students."
  })).setMimeType(ContentService.MimeType.JSON);
}

function setupHeadersIfNeeded(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
      "දිනය සහ වේලාව (Date & Time)",
      "වර්ගය (Event Type)",
      "ශිෂ්‍යයාගේ සම්පූර්ණ නම (Student Name)",
      "WhatsApp අංකය (WhatsApp Number)",
      "විද්‍යුත් තැපෑල (Email Address)",
      "නගරය / දිස්ත්‍රික්කය (City)",
      "ලකුණු (Score / 50)",
      "ප්‍රතිශතය (Percentage)",
      "සාමාර්ථය (Grade)"
    ];

    sheet.appendRow(headers);

    // Style the header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0f172a");
    headerRange.setFontColor("#38bdf8");
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(11);
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 35);

    // Freeze header row
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 170); // Timestamp
    sheet.setColumnWidth(2, 140); // Event
    sheet.setColumnWidth(3, 200); // Name
    sheet.setColumnWidth(4, 160); // WhatsApp
    sheet.setColumnWidth(5, 200); // Email
    sheet.setColumnWidth(6, 130); // City
    sheet.setColumnWidth(7, 100); // Score
    sheet.setColumnWidth(8, 100); // Percentage
    sheet.setColumnWidth(9, 120); // Grade
  }
}
