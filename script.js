// ===============================================
//              CONFIGURATION
// ===============================================
const CONFIG = {
  TEMPLATE: `<div style="max-width: 880px; margin: 0 auto; font-family: 'Noto Sans KR', sans-serif; color: #1a1a1a; line-height: 1.65;">
  
  <!-- Main Product Image -->
  <div style="margin: 24px 0; text-align: center">
    <img src="{{main_image}}" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1)" />
  </div>

  <!-- Brand Header -->
  <div style="padding: 28px 0 20px; text-align: center; border-bottom: 1px solid #eee;">
    <div style="font-size: 24px; font-weight: 700; color: #1b3b6f">{{brand_name}}</div>
    <div style="font-size: 14px; color: #666;">{{brand_subtitle}}</div>
  </div>

  <!-- Trust Badge -->
  <div style="padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; margin: 32px 0; text-align: center;">
    <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">🛡️ {{trust_title}}</div>
    <div style="font-size: 14px; opacity: 0.9;">{{trust_description}}</div>
  </div>

  <!-- Product Title -->
  <div style="margin: 40px 0 32px;">
    <h1 style="font-size: 28px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px;">{{product_title}}</h1>
    <p style="font-size: 16px; color: #666;">{{product_subtitle}}</p>
  </div>

  <!-- Price Section -->
  <div style="background: #f8f9fa; padding: 32px; border-radius: 12px; margin-bottom: 40px; text-align: center; border: 1px solid #e9ecef;">
    <div style="font-size: 16px; color: #666; margin-bottom: 8px;">{{price_label}}</div>
    <div style="font-size: 36px; font-weight: 700; color: #1b3b6f; margin-bottom: 8px;">{{price}}</div>
    <div style="font-size: 14px; color: #888;">{{price_note}}</div>
  </div>

  <!-- Description -->
  <div style="margin-bottom: 48px;">
    <h2 style="font-size: 22px; font-weight: 600; color: #1a1a1a; margin-bottom: 24px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">Product Details</h2>
    <div style="font-size: 15px; color: #333; line-height: 1.8; white-space: pre-line;">{{description}}</div>
  </div>

  <!-- Specifications -->
  <div style="margin-bottom: 48px;">
    <h2 style="font-size: 22px; font-weight: 600; color: #1a1a1a; margin-bottom: 24px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">Specifications</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      {{specs}}
    </table>
  </div>

  <!-- Features -->
  <div style="margin-bottom: 48px;">
    <h2 style="font-size: 22px; font-weight: 600; color: #1a1a1a; margin-bottom: 24px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">Key Features</h2>
    <div style="display: grid; gap: 16px;">{{features}}</div>
  </div>

  <!-- Gallery -->
  <div style="margin-bottom: 48px;">
    <h2 style="font-size: 22px; font-weight: 600; color: #1a1a1a; margin-bottom: 24px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">Gallery</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">{{gallery}}</div>
  </div>

  <!-- Contact Info -->
  <div style="background: #f8f9fa; padding: 32px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
    <h3 style="color: #1b3b6f; margin-bottom: 20px;">{{contact_title}}</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">{{contact_info}}</div>
  </div>

</div>`,
  SAMPLE_DATA: {
    brand_name: "TechStore",
    brand_subtitle: "Premium Electronics Store",
    trust_title: "Trusted Shopping Experience",
    trust_description: "✓ Authentic Products ✓ Secure Payment ✓ Fast Shipping",
    main_image:
      "https://via.placeholder.com/600x300/667eea/ffffff?text=Product+Image",
    product_title: "Premium Wireless Bluetooth Headphones",
    product_subtitle:
      "High-quality audio with superior comfort and advanced noise canceling",
    price_label: "Price",
    price: "$189.00",
    price_note: "Free shipping included",
    description:
      "Advanced noise canceling technology for premium listening experience.\\n\\n• Hi-Res Audio certified for studio-quality sound\\n• 95% noise reduction technology\\n• 30-hour continuous playback\\n• IPX4 water resistance\\n• Multi-device connectivity",
    specs: {
      Brand: "SoundMaster Pro",
      Model: "SM-WH1000XM5",
      Dimensions: "254 x 220 x 78mm",
      Weight: "280g",
      Color: "Midnight Black",
    },
    features: [
      "40mm dynamic drivers for rich bass",
      "LDAC codec support for lossless audio",
      "Touch gesture controls",
      "Quick attention mode",
      "Custom equalizer settings",
    ],
    gallery: [
      "https://via.placeholder.com/300x200/667eea/ffffff?text=Image+1",
      "https://via.placeholder.com/300x200/764ba2/ffffff?text=Image+2",
      "https://via.placeholder.com/300x200/f093fb/ffffff?text=Image+3",
    ],
    contact_title: "Order & Support",
    contact_info: {
      Email: "support@techstore.com",
      Shipping: "2-5 business days",
      Payment: "Credit Card / PayPal",
    },
  },
};

// ===============================================
//              MAIN APPLICATION
// ===============================================
class ProductPageGenerator {
  constructor() {
    this.elements = {
      templateEditor: document.getElementById("template-editor"),
      dataEditor: document.getElementById("data-editor"),
      preview: document.getElementById("preview"),
      codeViewer: document.getElementById("code-viewer"),
      mergeBtn: document.getElementById("merge-btn"),
      resetBtn: document.getElementById("reset-btn"),
      copyBtn: document.getElementById("copy-btn"),
      themeToggle: document.getElementById("theme-toggle"),
      tabBtns: document.querySelectorAll(".tab-btn"),
      tabContents: document.querySelectorAll(".tab-content"),
    };

    this.generatedHTML = "";
    this.init();
  }

  init() {
    this.initTheme();
    this.loadDefaultContent();
    this.attachEventListeners();
    this.generatePreview();
  }

  initTheme() {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    console.log("Initializing theme:", savedTheme); // 디버그 로그
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    console.log("Toggle theme clicked"); // 디버그 로그
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    console.log("Current theme:", currentTheme, "New theme:", newTheme); // 디버그 로그

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateThemeIcon(newTheme);
  }

  updateThemeIcon(theme) {
    const icon = this.elements.themeToggle.querySelector(".theme-toggle-icon");
    if (icon) {
      icon.textContent = theme === "light" ? "🌙" : "☀️";
      console.log("Theme icon updated:", theme, icon.textContent); // 디버그 로그
    } else {
      console.error("Theme toggle icon not found");
    }
  }

  loadDefaultContent() {
    this.elements.templateEditor.value = CONFIG.TEMPLATE;
    this.elements.dataEditor.value = JSON.stringify(
      CONFIG.SAMPLE_DATA,
      null,
      2
    );
  }

  attachEventListeners() {
    // Tab switching
    this.elements.tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.switchTab(e.target.dataset.tab)
      );
    });

    // Buttons
    this.elements.mergeBtn.addEventListener("click", () =>
      this.generatePreview()
    );
    this.elements.resetBtn.addEventListener("click", () => this.resetContent());
    this.elements.copyBtn.addEventListener("click", () => this.copyHTML());
    // Theme toggle with debugging
    if (this.elements.themeToggle) {
      console.log("Theme toggle button found, adding event listener");
      this.elements.themeToggle.addEventListener("click", () => {
        console.log("Theme toggle button clicked");
        this.toggleTheme();
      });
    } else {
      console.error("Theme toggle button not found!");
    }

    // Auto-generate on content change
    this.elements.templateEditor.addEventListener("input", () =>
      this.generatePreview()
    );
    this.elements.dataEditor.addEventListener("input", () =>
      this.generatePreview()
    );
  }

  switchTab(tabName) {
    // Get the parent panel to only affect tabs within that panel
    const clickedBtn = document.querySelector(`[data-tab="${tabName}"]`);
    const panel = clickedBtn.closest(".panel");

    // Remove active states within this panel
    const panelTabBtns = panel.querySelectorAll(".tab-btn");
    const panelTabContents = panel.querySelectorAll(".tab-content");

    panelTabBtns.forEach((btn) => btn.classList.remove("active"));
    panelTabContents.forEach((content) => content.classList.remove("active"));

    // Add active states
    clickedBtn.classList.add("active");
    panel.querySelector(`#${tabName}-tab`).classList.add("active");
  }

  generatePreview() {
    try {
      const template = this.elements.templateEditor.value;
      const data = JSON.parse(this.elements.dataEditor.value);

      const html = this.processTemplate(template, data);
      this.updatePreview(html);
    } catch (error) {
      this.showError(`JSON Error: ${error.message}`);
    }
  }

  processTemplate(template, data) {
    let processed = template;

    // Process each data field
    Object.entries(data).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`;

      if (typeof value === "object" && !Array.isArray(value)) {
        // Handle objects (like specs, contact_info)
        processed = processed.replace(
          placeholder,
          this.renderObject(value, key)
        );
      } else if (Array.isArray(value)) {
        // Handle arrays (like features, gallery)
        processed = processed.replace(
          placeholder,
          this.renderArray(value, key)
        );
      } else {
        // Handle simple strings/numbers
        processed = processed.replaceAll(placeholder, value || "");
      }
    });

    return processed;
  }

  renderObject(obj, key) {
    if (key === "specs") {
      return Object.entries(obj)
        .map(
          ([k, v]) => `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 16px 20px; background: #f8f9fa; font-weight: 600; width: 30%;">${k}</td>
            <td style="padding: 16px 20px;">${v}</td>
          </tr>
        `
        )
        .join("");
    }

    if (key === "contact_info") {
      return Object.entries(obj)
        .map(
          ([k, v]) => `
          <div style="padding: 12px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${k}</div>
            <div style="color: #666;">${v}</div>
          </div>
        `
        )
        .join("");
    }

    return JSON.stringify(obj);
  }

  renderArray(arr, key) {
    if (key === "features") {
      return arr
        .map(
          (item) => `
        <div style="padding: 16px; background: #f8f9fa; border-left: 4px solid #1b3b6f; border-radius: 4px;">
          ${item}
        </div>
      `
        )
        .join("");
    }

    if (key === "gallery") {
      return arr
        .map(
          (img) => `
        <img src="${img}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
      `
        )
        .join("");
    }

    return arr.join(", ");
  }

  updatePreview(content) {
    const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>상품 상세 페이지</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 20px; background: #f5f5f5;">
  ${content}
</body>
</html>`;

    this.generatedHTML = html;
    this.elements.preview.srcdoc = html;
    this.elements.codeViewer.value = html;
  }

  resetContent() {
    if (confirm("Are you sure you want to reset all content?")) {
      this.loadDefaultContent();
      this.generatePreview();
    }
  }

  copyHTML() {
    if (this.generatedHTML) {
      navigator.clipboard
        .writeText(this.generatedHTML)
        .then(() => {
          const originalText = this.elements.copyBtn.textContent;
          this.elements.copyBtn.textContent = "Copied!";
          setTimeout(() => {
            this.elements.copyBtn.textContent = originalText;
          }, 2000);
        })
        .catch((err) => {
          alert("Failed to copy. Please select and copy the code manually.");
        });
    } else {
      alert("No HTML to copy. Please generate first.");
    }
  }

  showError(message) {
    console.error(message);
    const errorHTML = `
      <div style="padding: 2rem; text-align: center; color: #dc3545; font-family: monospace;">
        <h3>Error</h3>
        <p>${message}</p>
      </div>
    `;
    this.elements.preview.srcdoc = errorHTML;
    this.elements.codeViewer.value = message;
  }
}

// ===============================================
//              INITIALIZATION
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
  new ProductPageGenerator();
});
