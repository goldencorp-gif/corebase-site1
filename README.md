
# CoreBase Construction Website

## Logo Configuration

To customize the logos for the site, ensure you have a `public` folder in your project root.

### How to Add Your Logos
1.  **Header Logo**: Save your header logo as `logo-header.png` inside the `public` folder.
2.  **Footer Logo**: Save your footer logo as `logo-footer.png` inside the `public` folder.
3.  **Default Logo**: Save your main logo as `logo.png` inside the `public` folder (this is used as a fallback).

### Configuration
The site looks for these specific filenames by default. You can change these paths by editing `public/site-settings.json`:
```json
{
  "headerLogo": "/logo-header.png",
  "footerLogo": "/logo-footer.png",
  "defaultLogo": "/logo.png"
}
```

## Syncing to GitHub

You can use the "Save to GitHub" feature to sync all changes. This will include the new `public` folder and `site-settings.json` file. Your deployment pipeline will automatically detect the `public` folder and serve your assets correctly.
