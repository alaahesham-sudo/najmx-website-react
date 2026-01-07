/**
 * Google Apps Script for NajmX Website Forms
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the Web App URL and use it in your Next.js API routes
 * 10. Click "Authorize access" when prompted
 */

// Configuration
const SPREADSHEET_ID = '10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY';
const CAREERS_SHEET_GID = '0'; // First sheet (gid=0)
const CONTACT_SHEET_GID = '1528028709'; // Second sheet (gid=1528028709)

/**
 * Main doPost function to handle form submissions
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType; // 'careers' or 'contact'
    
    if (formType === 'careers') {
      return handleCareersSubmission(data);
    } else if (formType === 'contact') {
      return handleContactSubmission(data);
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid form type' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle Careers form submission
 */
function handleCareersSubmission(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Careers');
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const newSheet = ss.insertSheet('Careers');
      // Add headers
      newSheet.getRange(1, 1, 1, 9).setValues([[
        'Timestamp',
        'Name',
        'Email',
        'Job Title',
        'Experience',
        'Country',
        'How did you hear about us',
        'Resume/CV Link',
        'Cover Letter'
      ]]);
      newSheet.getRange(1, 1, 1, 9).setFontWeight('bold');
      newSheet.getRange(1, 1, 1, 9).setBackground('#4285f4');
      newSheet.getRange(1, 1, 1, 9).setFontColor('#ffffff');
      
      // Add data to new sheet
      newSheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.jobTitle || '',
        data.experience || '',
        data.country || '',
        data.hearAbout || '',
        data.resume || '',
        data.coverLetter || ''
      ]);
    } else {
      // Add data to existing sheet
      sheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.jobTitle || '',
        data.experience || '',
        data.country || '',
        data.hearAbout || '',
        data.resume || '',
        data.coverLetter || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Application submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: 'Failed to submit application: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle Contact form submission
 */
function handleContactSubmission(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Contact');
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const newSheet = ss.insertSheet('Contact');
      // Add headers
      newSheet.getRange(1, 1, 1, 10).setValues([[
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Phone',
        'Country',
        'How did you hear about us',
        'Department',
        'Service/Reason',
        'Message'
      ]]);
      newSheet.getRange(1, 1, 1, 10).setFontWeight('bold');
      newSheet.getRange(1, 1, 1, 10).setBackground('#4285f4');
      newSheet.getRange(1, 1, 1, 10).setFontColor('#ffffff');
      
      // Add data to new sheet
      newSheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.company || '',
        data.phone || '',
        data.country || '',
        data.hearAbout || '',
        data.department || '',
        data.service || '',
        data.message || ''
      ]);
    } else {
      // Add data to existing sheet
      sheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.company || '',
        data.phone || '',
        data.country || '',
        data.hearAbout || '',
        data.department || '',
        data.service || '',
        data.message || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Contact form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: 'Failed to submit contact form: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function - can be run from Apps Script editor to test
 */
function testCareersSubmission() {
  const testData = {
    formType: 'careers',
    name: 'Test User',
    email: 'test@example.com',
    jobTitle: 'Software Engineer',
    experience: '3-5',
    country: 'United States',
    hearAbout: 'LinkedIn',
    resume: 'https://example.com/resume.pdf',
    coverLetter: 'This is a test cover letter'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

function testContactSubmission() {
  const testData = {
    formType: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    phone: '+1234567890',
    country: 'United States',
    hearAbout: 'Google Search',
    department: 'sales',
    service: 'VoIP Solutions',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
