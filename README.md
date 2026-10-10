# Strato Living — Furniture & Outdoor Living

A responsive catalogue website made from the 176 product photographs in your supplied ZIP file. The site uses a red, white, charcoal and warm-grey palette and lets customers enquire about each product directly on WhatsApp.

## Files
- `index.html` — website pages/sections and layout
- `styles.css` — colours, responsive design and styling
- `script.js` — product search, category filters, mobile menu and WhatsApp links
- `products.json` — editable product names, categories, image paths and descriptions
- `images/` — the original supplied product photographs, optimized for web display

## Open the website on your computer
1. Extract `Strato_Living_Website.zip` to a folder.
2. Open the extracted `strato_shop` folder.
3. Double-click `index.html` to preview it in Chrome.
4. If the catalogue does not load when opened directly as a file, run a small local server: open Command Prompt in the `strato_shop` folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Edit product names, categories and descriptions
1. Open `products.json` in Notepad or Visual Studio Code.
2. Find a product by its `id`.
3. Change its `name`, `category` or `description`, keeping the quotation marks and commas in place.
4. Save and refresh the website.

Product prices were not provided in the supplied ZIP, so the site says **Price on enquiry** rather than inventing prices. Customers can ask about price, options, availability and delivery through each product's WhatsApp button. Product names are starter labels based on broad visual categories; edit them to your exact item names when you have them.

## WhatsApp
The product buttons use `https://wa.me/27710331241` and pre-fill a message containing the product name. To change the number, edit `WHATSAPP_NUMBER` near the top of `script.js` and the contact links in `index.html`. Use country code 27 without the leading 0.

## Publish free with GitHub Pages
1. Sign in at https://github.com/ or create a free account.
2. Click **New repository**. Give it a name such as `strato-living`, and set it to **Public**.
3. Extract the ZIP. Upload the contents of the `strato_shop` folder (not the outer ZIP) to the repository. Make sure `index.html`, `styles.css`, `script.js`, `products.json`, and the `images` folder are at the repository's top level.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
6. Wait for GitHub to publish the site. The Pages section will show your public website URL.
7. Open that URL on your phone and computer to test the product images, search, category buttons and WhatsApp links.

## Important notes
- The listed address is shown as a business address; the website does not claim that walk-in shopping is available. Please contact the business before visiting.
- No product prices, stock information, certifications, delivery terms or detailed specifications were included in the ZIP, so customers are asked to confirm those directly.
- Google Fonts are optional remote fonts. The site remains readable with system font fallbacks if they do not load.
