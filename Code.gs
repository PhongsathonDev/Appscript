// Code.gs

// ฟังก์ชันเปิดหน้าเว็บ
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Dashboard เช็คชื่อ - วท.อำนาจเจริญ')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ฟังก์ชันดึงข้อมูลจาก Google Sheet
function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('Data'); // ชื่อแผ่นงานต้องตรงกัน
  
  // ดึงข้อมูลทั้งหมด (ไม่เอาหัวตาราง)
  const data = ws.getRange(2, 1, ws.getLastRow() - 1, 5).getDisplayValues();
  
  // ส่งข้อมูลกลับไปที่ฝั่ง Client
  return data;
}