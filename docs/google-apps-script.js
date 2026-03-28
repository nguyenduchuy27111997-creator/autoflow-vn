// Paste this into Google Apps Script (Extensions → Apps Script)
// Then Deploy → New deployment → Web app → Anyone → Deploy → Copy URL

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.company || "",
    data.industry || "",
    data.teamSize || "",
    (data.painPoints || []).join(", "),
    data.details || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
