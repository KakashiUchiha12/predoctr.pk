const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function generateOGImage() {
  let browser;
  try {
    // Launch browser
    browser = await chromium.launch({
      headless: true
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1200, height: 630 });

    // Get the HTML content
    const htmlPath = path.join(__dirname, 'og-template.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Set the HTML content
    await page.setContent(htmlContent, { waitUntil: 'networkidle' });

    // Wait a bit for images to load
    await page.waitForTimeout(2000);

    // Take screenshot
    const screenshotPath = path.join(__dirname, 'public', 'og-image.png');
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    });

    console.log('OG image generated successfully at:', screenshotPath);

  } catch (error) {
    console.error('Error generating OG image:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the function
generateOGImage();
