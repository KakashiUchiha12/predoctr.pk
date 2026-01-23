function doPost(e) {
  try {
    // Log the incoming request
    Logger.log("doPost triggered. Request data: " + JSON.stringify(e.parameter));

    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();

    // Get the form data from the request parameters (for URL-encoded form data)
    var data = e.parameter;

    // Add timestamp
    var timestamp = new Date();
    Logger.log("Timestamp generated: " + timestamp);

    // Prepare row data matching the column order in your Google Sheet
    var rowData = [
      timestamp,                          // A: Timestamp
      data.fullName || '',               // B: FullName
      data.fatherName || '',             // C: FatherName
      data.whatsappNumber || '',         // D: WhatsApp
      data.email || '',                  // E: Email
      data.currentClass || '',           // F: CurrentClass
      data.collegeName || '',            // G: CollegeName
      data.mdcatStatus || '',            // H: MDCATStatus
      data.previousMdcattScore || '',    // I: PreviousMDCAT
      data.pastYearMarks || '',          // J: PastYearMarks
      data.fscPart1Marks || '',          // K: FScPart1Marks
      data.fscPart2Marks || '',          // L: FScPart2Marks
      data.location || '',               // M: Location
      data.preferredStudyMode || '',     // N: StudyMode
      data.province || '',               // O: Province
      'Active'                           // P: Status (Fixed value)
    ];

    // Log the rowData that will be appended to the sheet
    Logger.log("Row data prepared: " + JSON.stringify(rowData));

    // Append the row to the sheet
    sheet.appendRow(rowData);
    Logger.log("Data appended to sheet.");

    // Send email notification (email sending is in try-catch to handle potential errors)
    try {
      var emailResult = sendRegistrationEmail(data, timestamp);
      Logger.log("Email sent successfully: " + emailResult);
    } catch (emailError) {
      // Log the email error and keep track of it in the spreadsheet (do not halt registration)
      Logger.log("Email sending failed: " + emailError.toString());

      // Log the error in the last row of the sheet for debugging purposes
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 16).setValue("Email failed: " + emailError.toString());
    }

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Registration saved successfully",
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Catch any other errors and log them
    Logger.log("Error saving registration: " + error.toString());

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: "Error saving registration: " + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendRegistrationEmail(data, timestamp) {
  // Add null check for data parameter
  if (!data) {
    Logger.log("Error: No data received for email");
    throw new Error("No registration data provided");
  }

  var recipientEmail = "diyer2112@gmail.com";  // Email to send to

  var subject = "New Registration: " + (data.fullName || "Unknown Student");

  // Create formatted email body
  var emailBody = "New student registration received:\n\n" +
    "Timestamp: " + timestamp.toLocaleString() + "\n\n" +
    "STUDENT INFORMATION:\n" +
    "==================\n" +
    "Full Name: " + (data.fullName || "Not provided") + "\n" +
    "Father's Name: " + (data.fatherName || "Not provided") + "\n" +
    "WhatsApp Number: " + (data.whatsappNumber || "Not provided") + "\n" +
    "Email: " + (data.email || "Not provided") + "\n\n" +
    "ACADEMIC INFORMATION:\n" +
    "====================\n" +
    "Current Class: " + (data.currentClass || "Not provided") + "\n" +
    "College Name: " + (data.collegeName || "Not provided") + "\n" +
    "MDCAT Status: " + (data.mdcatStatus || "Not provided") + "\n" +
    "Previous MDCAT Score: " + (data.previousMdcattScore || "Not provided") + "\n" +
    "Past Year Marks: " + (data.pastYearMarks || "Not provided") + "\n" +
    "FSc Part 1 Marks: " + (data.fscPart1Marks || "Not provided") + "\n" +
    "FSc Part 2 Marks: " + (data.fscPart2Marks || "Not provided") + "\n\n" +
    "LOCATION & PREFERENCES:\n" +
    "======================\n" +
    "Location: " + (data.location || "Not provided") + "\n" +
    "Preferred Study Mode: " + (data.preferredStudyMode || "Not provided") + "\n" +
    "Province: " + (data.province || "Not provided") + "\n\n" +
    "---\n" +
    "This is an automated notification from the PreDoctr registration system.";

  // Log the email content
  Logger.log("Email body: \n" + emailBody);

  // Use MailApp instead of GmailApp (simpler authorization)
  MailApp.sendEmail(recipientEmail, subject, emailBody);
  Logger.log("Email sent to: " + recipientEmail + " with subject: " + subject);

  return "Email sent to " + recipientEmail + " with subject: " + subject;
}

// Function to test the POST request simulation
function testAppendData() {
  var testData = {
    fullName: "Test Student",
    fatherName: "Test Father",
    whatsappNumber: "03001234567",
    email: "test@example.com",
    currentClass: "12th",
    collegeName: "Test College",
    mdcatStatus: "fresher",
    location: "Lahore",
    preferredStudyMode: "online",
    province: "punjab"
  };

  // Simulate doPost call
  var simulatedEvent = {
    parameter: testData
  };

  var result = doPost(simulatedEvent);
  Logger.log("Test result: " + result.getContent());
}

// Test function for email only - run this to test email functionality
function testEmailOnly() {
  try {
    var testData = {
      fullName: "Email Test Student",
      fatherName: "Test Father",
      whatsappNumber: "03001234567",
      email: "test@example.com",
      currentClass: "12th",
      collegeName: "Test College",
      mdcatStatus: "repeater",
      previousMdcattScore: "150/200",
      pastYearMarks: "950/1100",
      fscPart1Marks: "450/550",
      fscPart2Marks: "480/550",
      location: "Karachi",
      preferredStudyMode: "online",
      province: "sindh"
    };

    var timestamp = new Date();

    Logger.log("Testing email functionality...");
    var result = sendRegistrationEmail(testData, timestamp);
    Logger.log("Email test successful: " + result);

    return "Email test completed successfully";
  } catch (error) {
    Logger.log("Email test failed: " + error.toString());
    return "Email test failed: " + error.toString();
  }
}

function doGet(e) {
  // Simple health check endpoint
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK", message: "Apps Script is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
