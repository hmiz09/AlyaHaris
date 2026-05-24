// =========================================================================
// GOOGLE APPS SCRIPT FOR WEDDING PLANNER SYNC
// =========================================================================
// This script enables real-time synchronization between your wedding planner
// web app (index.html) and your Google Sheets database.
//
// HOW TO USE IT:
// 1. Open Google Sheets (https://sheets.google.com) and create a blank sheet.
// 2. Click "Extensions" -> "Apps Script" in the top menu bar.
// 3. Delete any default code in the editor and paste this entire script.
// 4. Click the Save icon (floppy disk).
// 5. Click "Deploy" (top right) -> "New deployment".
// 6. Click the gear icon next to "Select type" and choose "Web app".
// 7. Configure deployment:
//    - Description: Wedding Planner Database Sync
//    - Execute as: Me (your-email@gmail.com)
//    - Who has access: Anyone (This is required so the web app can sync)
// 8. Click "Deploy" and authorize the script permissions.
// 9. Copy the "Web app URL" provided.
// 10. Paste the copied URL into your "config.js" file inside the quotes:
//     const GSHEET_SCRIPT_URL = "PASTE_YOUR_URL_HERE";
// =========================================================================

function doGet(e) {
  var data = PropertiesService.getScriptProperties().getProperty("wedding_data");
  if (!data) {
    data = "{}";
  }
  return ContentService.createTextOutput(data)
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}

function doPost(e) {
  var data = e.postData.contents;
  PropertiesService.getScriptProperties().setProperty("wedding_data", data);
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}

// Handles browser CORS preflight checks automatically
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}
