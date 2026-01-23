# PreDoctr.pk Sponsored Banner

A responsive, animated sponsored banner that matches the preDoctr.pk website design perfectly.

## Features

- ✅ **Exact Design Match**: Logo styling, colors, and fonts match the preDoctr.pk navbar
- ✅ **Centered Logo + Text**: Logo and "preDoctr.pk" text are centered in the banner
- ✅ **Light Theme Only**: Optimized for light theme design
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Smooth Animations**: Slide-down entrance, slide-up exit
- ✅ **Close Button**: X button that disappears the banner permanently
- ✅ **Smart Positioning**: "Sponsored by" text positioned to the right of the centered text
- ✅ **Accessibility**: Proper ARIA labels and keyboard support
- ✅ **WordPress Ready**: Easy integration with WordPress themes

## Files Included

1. **`sponsored-banner.html`** - Complete standalone HTML page for testing
2. **`wordpress-sponsored-banner.html`** - WordPress integration code
3. **`Sponsored-Banner-README.md`** - This documentation

## WordPress Integration

### Method 1: Custom HTML Block (Recommended)
1. Copy the entire content from `wordpress-sponsored-banner.html`
2. In WordPress admin, go to **Appearance > Widgets**
3. Add a **Custom HTML** widget to your header area
4. Paste the code and save

### Method 2: Theme Files
1. Add the CSS styles to your theme's `style.css`
2. Add the HTML banner to `header.php` before `</head>`
3. Add the JavaScript to `footer.php` before `</body>`

### Method 3: Using Functions.php
```php
function predoctr_sponsored_banner() {
    // Add the banner HTML, CSS, and JS here
}
add_action('wp_head', 'predoctr_sponsored_banner');
```

## Customization Options

### Timing
- Banner shows after 1 second by default
- Change the delay in the JavaScript: `setTimeout(showPreDoctrBanner, 1000);`

### Colors
- Main brand color: `#4096EE` (PreDoctr blue)
- Text colors adapt to light/dark themes automatically

### Logo Path
- Update the image source path in the HTML
- WordPress version uses: `<?php echo get_template_directory_uri(); ?>/favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png`

### Persistence
- Banner stays dismissed using localStorage
- Clear localStorage to show banner again

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Mobile Safari, Chrome, Firefox, Edge tested

## Analytics Integration

The banner includes Google Analytics tracking (if gtag is available):
- `banner_impression` - When banner is shown
- `banner_close` - When user closes banner

## Demo

Open `sponsored-banner.html` in a browser to see the banner in action.

## Technical Details

- **Fonts**: Inter (body) and Poppins (headings) from Google Fonts
- **Icons**: Inline SVG for the close button
- **Animations**: CSS keyframes for smooth transitions
- **Responsive**: Media queries for mobile optimization
- **Performance**: Minimal JavaScript, efficient CSS

## License

Created for preDoctr.pk - customize as needed for your WordPress site.
