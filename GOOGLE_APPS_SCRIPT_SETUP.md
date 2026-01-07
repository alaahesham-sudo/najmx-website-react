# Google Apps Script Setup Instructions

## Step 1: Create Google Apps Script for Careers Form

1. Go to https://script.google.com/
2. Click "New Project"
3. Replace the code with the Careers Script (see below)
4. Click "Deploy" > "New deployment"
5. Select type: "Web app"
6. Set:
   - Execute as: "Me"
   - Who has access: "Anyone"
7. Click "Deploy"
8. Copy the Web App URL
9. Replace `YOUR_CAREERS_SCRIPT_ID` in `app/api/submit-careers/route.ts` with your script URL

## Step 2: Create Google Apps Script for Contact Form

1. Create another new project in Google Apps Script
2. Replace the code with the Contact Script (see below)
3. Deploy as Web App (same steps as above)
4. Copy the Web App URL
5. Replace `YOUR_CONTACT_SCRIPT_ID` in `app/api/submit-contact/route.ts` with your script URL

## Careers Script Code

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY')
      .getSheetByName('careers') || SpreadsheetApp.openById('10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY')
      .getSheets()[0]; // Use first sheet if 'careers' sheet doesn't exist
    
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Job Title',
        'Experience',
        'Country',
        'How did you hear about us',
        'Resume/CV Link',
        'Cover Letter'
      ]);
    }
    
    // Append the data
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name,
      data.email,
      data.jobTitle,
      data.experience,
      data.country,
      data.hearAbout,
      data.resume,
      data.coverLetter || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Contact Script Code

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY')
      .getSheetByName('contact') || SpreadsheetApp.openById('10NcQDd0eHfhIWe60raAdKx0CqRdJQZ1FpxJ80bqqxbY')
      .getSheetByIndex(1); // Use second sheet (gid=1528028709) for contact
    
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
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
      ]);
    }
    
    // Append the data
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name,
      data.email,
      data.company,
      data.phone || '',
      data.country,
      data.hearAbout,
      data.department,
      data.service,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Important Notes

- Make sure the Google Sheet IDs match your actual sheets
- The sheet names should match: 'careers' for careers and 'contact' for contact
- After deploying, you'll need to authorize the script the first time
- The Web App URL will look like: `https://script.google.com/macros/s/AKfycby.../exec`
