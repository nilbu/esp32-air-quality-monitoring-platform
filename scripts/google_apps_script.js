function doGet(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  sheet.appendRow([
    new Date(),                 // Device Time (zastępczo)
    new Date(),                 // Logged Time
    e.parameter.temp,
    e.parameter.hum,
    e.parameter.press,
    e.parameter.pm1,
    e.parameter.pm25,
    e.parameter.pm10,
    e.parameter.rssi
  ]);

  return ContentService.createTextOutput("OK");
}
