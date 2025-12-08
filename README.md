# Product Page Builder

A simple, clean tool for building product pages by merging HTML templates with JSON data.

## ✨ Features

- **Template Editor**: Edit HTML templates with `{{placeholder}}` syntax
- **JSON Data Editor**: Manage product data in clean JSON format
- **Live Preview**: Real-time preview of generated pages
- **HTML Export**: View and copy generated HTML code
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Auto-save**: Theme preference saved in localStorage

## How to Use

1. **Edit Template**: Modify the HTML template using `{{placeholder}}` syntax
2. **Update Data**: Edit JSON data in the data tab
3. **Preview**: See real-time results in the preview tab
4. **Export**: Switch to HTML Code tab and copy the generated code

## Template Syntax

Use `{{placeholder}}` syntax in your HTML template:

```html
<h1>{{product_title}}</h1>
<p>{{description}}</p>
<img src="{{main_image}}" />
```

## JSON Structure

```json
{
  "product_title": "Your Product Name",
  "description": "Product description",
  "main_image": "https://example.com/image.jpg",
  "specs": {
    "Brand": "Brand Name",
    "Model": "Model Number"
  },
  "features": ["Feature 1", "Feature 2"]
}
```

## File Structure

```
├── index.html    # Main application
├── styles.css    # Styling
├── script.js     # Application logic
└── README.md     # Documentation
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

No server required - works directly from file system.

## License

MIT License
