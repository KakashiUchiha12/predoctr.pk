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

  // Send the email
  var result = GmailApp.sendEmail(recipientEmail, subject, emailBody);
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

// CRITICAL: Run this function ONCE to authorize Gmail permissions for web app
function authorizeGmailAccess() {
  try {
    // This will trigger the authorization prompt
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), "Authorization Test", "Testing Gmail authorization for web app");
    Logger.log("Gmail authorization successful");
    return "Gmail access authorized successfully";
  } catch (error) {
    Logger.log("Authorization failed: " + error.toString());
    return "Authorization failed: " + error.toString();
  }
}

// Run this function to check which Cloud Console project this Apps Script uses
function checkProjectDetails() {
  try {
    Logger.log("=== APPS SCRIPT PROJECT DETAILS ===");
    Logger.log("Script ID: " + ScriptApp.getScriptId());
    Logger.log("Project Key: " + ScriptApp.getProjectKey());

    // Try to get project details
    try {
      var projectId = ScriptApp.getProjectKey();
      Logger.log("Cloud Console Project ID/Key: " + projectId);
    } catch (e) {
      Logger.log("Could not get Cloud Console Project ID: " + e.toString());
    }

    // Get user info
    try {
      var userEmail = Session.getActiveUser().getEmail();
      Logger.log("Active User Email: " + userEmail);
    } catch (e) {
      Logger.log("Could not get user email: " + e.toString());
    }

    // Get OAuth token info (if available)
    try {
      var token = ScriptApp.getOAuthToken();
      if (token) {
        Logger.log("OAuth Token available: Yes");
      } else {
        Logger.log("OAuth Token available: No");
      }
    } catch (e) {
      Logger.log("OAuth Token check failed: " + e.toString());
    }

    Logger.log("=== END PROJECT DETAILS ===");

    return "Project details logged. Check the execution logs above.";
  } catch (error) {
    Logger.log("Error checking project details: " + error.toString());
    return "Error: " + error.toString();
  }
}

function doGet(e) {
  // Simple health check endpoint
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK", message: "Apps Script is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
