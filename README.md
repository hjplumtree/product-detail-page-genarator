# Product Detail Page Generator

A simple web-based HTML editor for creating product pages with live preview. No setup required - just open and start coding.

## Features

- ✅ Live HTML preview as you type
- ✅ Dark theme editor interface
- ✅ Mobile responsive design
- ✅ No dependencies - pure HTML/CSS/JS
- ✅ Pre-built product card styles

## Quick Start

**Option 1: Direct Use**

```bash
# Download and open
open index.html
```

**Option 2: Local Server**

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Usage

1. Open `index.html` in your browser
2. Edit HTML in the left panel
3. See live preview on the right

**Sample HTML:**

```html
<div class="product-card">
  <h2>Product Name</h2>
  <img src="image.jpg" alt="Product" />
  <p class="price">$99.99</p>
  <p class="description">Product description...</p>
  <button>Add to Cart</button>
</div>
```

**Built-in CSS Classes:**

- `.product-card` - Main container
- `.price` - Price styling
- `.description` - Description text

## Customization

Edit `styles.css` for themes:

```css
:root {
  --bg-primary: #1e1e1e;
  --bg-secondary: #2d2d2d;
  --text-primary: #fff;
}
```

## Deployment

**GitHub Pages:** Push to GitHub → Settings → Pages → Deploy

**Local Server:** Any static file server works

## Contributing

1. Fork the repo
2. Create feature branch
3. Make changes
4. Submit pull request

## License

MIT License - see LICENSE file
