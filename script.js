// // Configuration removed - using direct template and data access==========================================
//              CONFIGURATION
// ===============================================
const CONFIG = {
  // 기본 사용할 템플릿과 데이터
  DEFAULT_TEMPLATE: "template_basic",
  DEFAULT_DATA: "sample_basic",
};

// ===============================================
//              STYLE CONFIGURATIONS
// ===============================================
const STYLE_PRESETS = {
  // 기본 리스트 아이템 스타일
  listItem: {
    margin: "8px 0",
    paddingLeft: "8px",
    fontSize: "15px",
    color: "#333",
  },

  // 강조된 박스 스타일 (아이콘 포함)
  highlightBox: {
    padding: "8px 12px",
    background: "#f8f9fa",
    margin: "10px 0",
    borderRadius: "4px",
    borderLeft: "2px solid #1b3b6f",
    listStyle: "none",
    fontSize: "15px",
    color: "#333",
  },

  // 테이블 행 스타일
  tableRow: {
    borderBottom: "1px solid #eee",
  },

  // 테이블 데이터 셀 스타일
  tableCell: {
    padding: "12px 16px",
  },

  // 테이블 헤더 셀 스타일
  tableHeaderCell: {
    padding: "12px 16px",
    fontWeight: "600",
    background: "#f8f9fa",
    width: "30%",
  },
};

// 스타일 객체를 CSS 문자열로 변환
function styleObjectToCss(styleObj) {
  return Object.entries(styleObj)
    .map(([key, value]) => {
      // camelCase를 kebab-case로 변환
      const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${cssKey}: ${value}`;
    })
    .join("; ");
}

// HTML 리스트 아이템 생성 유틸리티
function createListItem(content, stylePreset = null, icon = null) {
  const iconPrefix = icon ? `${icon} ` : "";
  const styleAttr = stylePreset
    ? ` style="${styleObjectToCss(stylePreset)}"`
    : "";
  return `<li${styleAttr}>${iconPrefix}${content}</li>`;
}

// HTML 컨테이너 요소 생성 유틸리티
function createContainer(content, stylePreset = null, icon = null) {
  const iconPrefix = icon ? `${icon} ` : "";
  const styleAttr = stylePreset
    ? ` style="${styleObjectToCss(stylePreset)}"`
    : "";
  return `<div${styleAttr}>${iconPrefix}${content}</div>`;
}

// HTML 테이블 행 생성 유틸리티
function createTableRow(cells, rowStyle = null, cellStyles = []) {
  const rowStyleAttr = rowStyle ? ` style="${styleObjectToCss(rowStyle)}"` : "";

  const cellsHtml = cells
    .map((cell, index) => {
      const cellStyle = cellStyles[index];
      const cellStyleAttr = cellStyle
        ? ` style="${styleObjectToCss(cellStyle)}"`
        : "";
      return `<td${cellStyleAttr}>${cell}</td>`;
    })
    .join("");

  return `<tr${rowStyleAttr}>${cellsHtml}</tr>`;
}

// ===============================================
//              MAIN APPLICATION
// ===============================================
class TemplateProcessor {
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
      dynamicStyleToggle: document.getElementById("dynamic-style-toggle"),
      toggleLabel: document.querySelector(".toggle-label"),
      tabBtns: document.querySelectorAll(".tab-btn"),
      tabContents: document.querySelectorAll(".tab-content"),
      // Image inputs
      imageInputs: {
        main_image: document.getElementById("main_image"),
        image_overview_01: document.getElementById("image_overview_01"),
        image_overview_02: document.getElementById("image_overview_02"),
        image_details_01: document.getElementById("image_details_01"),
        image_details_02: document.getElementById("image_details_02"),
        image_specs: document.getElementById("image_specs"),
      },
    };

    this.generatedHTML = "";
    this.init();
  }

  // Initialize application
  init() {
    this.initTheme();
    this.initDynamicStyles();
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

  initDynamicStyles() {
    // 초기 상태 설정
    if (this.elements.dynamicStyleToggle && this.elements.toggleLabel) {
      const isEnabled = this.elements.dynamicStyleToggle.checked;
      this.elements.toggleLabel.textContent = isEnabled ? "ON" : "OFF";
    }
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
  } // Dynamic style toggle
  toggleDynamicStyles() {
    const isEnabled = this.elements.dynamicStyleToggle.checked;
    this.elements.toggleLabel.textContent = isEnabled ? "ON" : "OFF";

    console.log(`Dynamic styles: ${isEnabled ? "ENABLED" : "DISABLED"}`);

    // 즉시 프리뷰 업데이트
    this.generatePreview();
  }

  // Load default template and data
  loadDefaultContent() {
    this.elements.templateEditor.value = TEMPLATES;
    this.elements.dataEditor.value = JSON.stringify(SAMPLE_DATA, null, 2);
  }

  // Event listeners
  attachEventListeners() {
    // Tab switching
    this.elements.tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.switchTab(e.target.dataset.tab),
      );
    });

    // Buttons
    this.elements.mergeBtn.addEventListener("click", () =>
      this.generatePreview(),
    );
    this.elements.resetBtn.addEventListener("click", () => this.resetContent());
    this.elements.copyBtn.addEventListener("click", () => this.copyHTML());

    // Theme toggle
    if (this.elements.themeToggle) {
      this.elements.themeToggle.addEventListener("click", () =>
        this.toggleTheme(),
      );
    }

    // Dynamic style toggle
    if (this.elements.dynamicStyleToggle) {
      this.elements.dynamicStyleToggle.addEventListener("change", () =>
        this.toggleDynamicStyles(),
      );
    }

    // Auto-generate on content change
    this.elements.templateEditor.addEventListener("input", () =>
      this.generatePreview(),
    );
    this.elements.dataEditor.addEventListener("input", () =>
      this.generatePreview(),
    );

    // Image inputs auto-update
    Object.values(this.elements.imageInputs).forEach((input) => {
      input.addEventListener("input", () => this.generatePreview());
    });
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

      // Merge image data with JSON data
      const imageData = this.getImageData();
      const mergedData = { ...data, ...imageData };

      const html = this.processTemplate(template, mergedData);
      this.updatePreview(html);
    } catch (error) {
      this.showError(`JSON Error: ${error.message}`);
    }
  }

  // Get image data from input fields
  getImageData() {
    const imageData = {};

    // Get individual image URLs
    Object.entries(this.elements.imageInputs).forEach(([key, input]) => {
      imageData[key] = input.value || "";
    });

    // Generate composite placeholders for template
    imageData.image_overview = this.generateImageHTML([
      imageData.image_overview_01,
      imageData.image_overview_02,
    ]);

    imageData.image_details = this.generateImageHTML([
      imageData.image_details_01,
      imageData.image_details_02,
    ]);

    return imageData;
  }

  // Generate HTML for multiple images
  generateImageHTML(imageUrls) {
    return imageUrls
      .filter((url) => url && url.trim())
      .map(
        (url) =>
          `<img src="${url}" style="width: 100%; border-radius: 6px; margin-bottom: 10px" />`,
      )
      .join("\n");
  }

  processTemplate(template, data) {
    let html = template;
    const useDynamicStyles = this.elements.dynamicStyleToggle.checked;

    // Replace all placeholders
    Object.keys(data).forEach((key) => {
      const placeholder = `{{${key}}}`;
      let value = data[key];

      // Handle special data type rendering
      if (key === "specs" && Array.isArray(value)) {
        value = this.generateDataTable(value, useDynamicStyles);
      } else if (key === "key_value_list" && Array.isArray(value)) {
        value = this.generateBasicList(value, useDynamicStyles);
      } else if (key === "feature_list" && Array.isArray(value)) {
        value = this.generateHighlightList(value, useDynamicStyles);
      } else if (Array.isArray(value)) {
        value = value.join(", ");
      } else if (typeof value === "object" && value !== null) {
        value = JSON.stringify(value);
      }

      html = html.replace(new RegExp(placeholder, "g"), value || "");
    });

    // Hide rows for missing data
    html = this.hideMissingData(html);

    this.generatedHTML = html;
    return html;
  }

  generateDataTable(data, useDynamicStyles = true) {
    return data
      .map((item) => {
        if (useDynamicStyles) {
          const rowStyle = styleObjectToCss(STYLE_PRESETS.tableRow);
          const headerStyle = styleObjectToCss(STYLE_PRESETS.tableHeaderCell);
          const cellStyle = styleObjectToCss(STYLE_PRESETS.tableCell);

          return `
        <tr style="${rowStyle}">
          <td style="${headerStyle}">${item.label}</td>
          <td style="${cellStyle}">${item.value}</td>
        </tr>`;
        } else {
          return `
        <tr>
          <td>${item.label}</td>
          <td>${item.value}</td>
        </tr>`;
        }
      })
      .join("");
  }

  generateBasicList(items, useDynamicStyles = true) {
    return items
      .filter((item) => item && item.trim())
      .map((item) => {
        if (useDynamicStyles) {
          return createListItem(item, STYLE_PRESETS.listItem);
        } else {
          return createListItem(item);
        }
      })
      .join("");
  }

  generateHighlightList(items, useDynamicStyles = true) {
    return items
      .filter((item) => item && item.trim())
      .map((item) => {
        if (useDynamicStyles) {
          return createListItem(item, STYLE_PRESETS.highlightBox, "✓");
        } else {
          return createListItem(item);
        }
      })
      .join("");
  }

  hideMissingData(html) {
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
  new TemplateProcessor();
});
