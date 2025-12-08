// ===============================================
//              CONFIGURATION
// ===============================================
const CONFIG = {
  // 기본 사용할 템플릿과 데이터
  DEFAULT_TEMPLATE: "korean_ecommerce",
  DEFAULT_DATA: "korean_rainsuit",
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

  // Initialize application
  init() {
    this.initTheme();
    this.loadDefaultContent();
    this.attachEventListeners();
    this.generatePreview();
  }

  // Theme management
  initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateThemeIcon(newTheme);
  }

  updateThemeIcon(theme) {
    const icon = this.elements.themeToggle?.querySelector(".theme-toggle-icon");
    if (icon) {
      icon.textContent = theme === "light" ? "🌙" : "☀️";
    }
  }

  // Load default template and data
  loadDefaultContent() {
    // 외부 파일의 템플릿과 샘플 데이터 사용
    this.elements.templateEditor.value =
      TEMPLATES[CONFIG.DEFAULT_TEMPLATE] || TEMPLATES.korean_ecommerce;
    this.elements.dataEditor.value = JSON.stringify(
      SAMPLE_DATA[CONFIG.DEFAULT_DATA] || SAMPLE_DATA.korean_rainsuit,
      null,
      2
    );
  }

  // Event listeners
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

    // Theme toggle
    if (this.elements.themeToggle) {
      this.elements.themeToggle.addEventListener("click", () =>
        this.toggleTheme()
      );
    }

    // Auto-generate on content change
    this.elements.templateEditor.addEventListener("input", () =>
      this.generatePreview()
    );
    this.elements.dataEditor.addEventListener("input", () =>
      this.generatePreview()
    );
  }

  // Tab management
  switchTab(tabName) {
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

  // Template processing
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
    let html = template;

    // Replace all placeholders
    Object.keys(data).forEach((key) => {
      const placeholder = `{{${key}}}`;
      let value = data[key];

      // Handle special cases
      if (key === "specs" && Array.isArray(value)) {
        value = this.generateSpecsTable(value);
      } else if (key === "key_value_list" && Array.isArray(value)) {
        value = this.generateBulletList(value);
      } else if (key === "feature_list" && Array.isArray(value)) {
        value = this.generateFeatureList(value);
      } else if (Array.isArray(value)) {
        value = value.join(", ");
      } else if (typeof value === "object" && value !== null) {
        value = JSON.stringify(value);
      }

      html = html.replace(new RegExp(placeholder, "g"), value || "");
    });

    // Hide rows for missing data
    html = this.hideMissingSpecs(html);

    this.generatedHTML = html;
    return html;
  }

  generateSpecsTable(specs) {
    return specs
      .map((spec) => {
        return `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 16px; font-weight: 600; background: #f8f9fa; width: 30%;">${spec.label}</td>
          <td style="padding: 12px 16px;">${spec.value}</td>
        </tr>`;
      })
      .join("");
  }

  generateBulletList(items) {
    return items
      .filter((item) => item && item.trim())
      .map(
        (item) =>
          `<li style="margin-bottom: 8px; padding-left: 8px;">${item}</li>`
      )
      .join("");
  }

  generateFeatureList(features) {
    return features
      .filter((feature) => feature && feature.trim())
      .map(
        (feature) =>
          `<div style="padding: 8px 12px; background: #f8f9fa; margin: 4px 0; border-radius: 4px; border-left: 3px solid #1b3b6f;">✓ ${feature}</div>`
      )
      .join("");
  }

  hideMissingSpecs(html) {
    // Remove table rows that still contain placeholders
    return html.replace(/<tr[^>]*>.*?{{[^}]+}}.*?<\/tr>/gs, "");
  }

  updatePreview(html) {
    this.elements.preview.srcdoc = html;
    this.elements.codeViewer.value = html;
  }

  // Utility functions
  resetContent() {
    if (confirm("Are you sure you want to reset all content?")) {
      this.loadDefaultContent();
      this.generatePreview();
    }
  }

  copyHTML() {
    if (this.generatedHTML) {
      const originalText = this.elements.copyBtn.textContent;

      navigator.clipboard
        .writeText(this.generatedHTML)
        .then(() => {
          this.elements.copyBtn.textContent = "Copied!";
          setTimeout(() => {
            this.elements.copyBtn.textContent = originalText;
          }, 2000);
        })
        .catch(() => {
          alert("Failed to copy. Please select and copy the code manually.");
        });
    } else {
      alert("No HTML to copy. Please generate first.");
    }
  }

  showError(message) {
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
