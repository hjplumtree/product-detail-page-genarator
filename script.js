document.addEventListener('DOMContentLoaded', function() {
    const htmlEditor = document.getElementById('html-editor');
    const previewFrame = document.getElementById('preview-frame');
    
    // Update preview function
    // Note: This editor intentionally renders user-provided HTML in the preview iframe.
    // This is the expected behavior for a live HTML preview tool.
    // The iframe is sandboxed on the same origin for this local development tool.
    function updatePreview() {
        const htmlContent = htmlEditor.value;
        const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        
        // Create a complete HTML document with basic styling
        const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        padding: 20px;
                        margin: 0;
                        line-height: 1.6;
                    }
                    .product-card {
                        max-width: 300px;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        text-align: center;
                    }
                    .product-card img {
                        max-width: 100%;
                        border-radius: 4px;
                    }
                    .product-card h2 {
                        margin: 10px 0;
                        color: #333;
                    }
                    .product-card .price {
                        font-size: 1.5rem;
                        color: #e63946;
                        font-weight: bold;
                    }
                    .product-card .description {
                        color: #666;
                        margin: 10px 0;
                    }
                    .product-card button {
                        background-color: #2563eb;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 1rem;
                    }
                    .product-card button:hover {
                        background-color: #1d4ed8;
                    }
                </style>
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
        `;
        
        previewDocument.open();
        previewDocument.write(fullHtml);
        previewDocument.close();
    }
    
    // Listen for input changes and update preview instantly
    htmlEditor.addEventListener('input', updatePreview);
    
    // Initial preview update
    updatePreview();
});
