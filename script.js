// ===============================================
//              CONFIGURATION
// ===============================================
const CONFIG = {
  // 기본 사용할 템플릿과 데이터
  DEFAULT_TEMPLATE: "korean_ecommerce",
  DEFAULT_DATA: "korean_rainsuit",
};

// ===============================================
//              STYLE CONFIGURATIONS
// ===============================================
const STYLE_PRESETS = {
  // key_value_list 스타일 (정확히 지시된 스타일만)
  enhancedListItem: {
    margin: "6px 0",
    paddingLeft: "8px",
    fontSize: "15px",
    color: "#333",
  },

  // 기능 박스 스타일 (feature boxes with icons)
  featureBox: {
    padding: "8px 12px",
    background: "#f8f9fa",
    margin: "6px 0",
    borderRadius: "4px",
    borderLeft: "3px solid #1b3b6f",
    listStyle: "none",
    fontSize: "15px",
    color: "#333",
  },

  // 테이블 행 스타일
  tableRow: {
    borderBottom: "1px solid #eee",
  },

  // 테이블 셀 스타일
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

// 범용 리스트 아이템 생성기
function createStyledListItem(content, stylePreset = null, icon = null) {
  const iconPrefix = icon ? `${icon} ` : "";
  const styleAttr = stylePreset
    ? ` style="${styleObjectToCss(stylePreset)}"`
    : "";
  return `<li${styleAttr}>${iconPrefix}${content}</li>`;
}

// 범용 박스 요소 생성기
function createStyledBox(content, stylePreset = null, icon = null) {
  const iconPrefix = icon ? `${icon} ` : "";
  const styleAttr = stylePreset
    ? ` style="${styleObjectToCss(stylePreset)}"`
    : "";
  return `<div${styleAttr}>${iconPrefix}${content}</div>`;
}

// 범용 테이블 행 생성기
function createStyledTableRow(cells, rowStyle = null, cellStyles = []) {
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
      dynamicStyleToggle: document.getElementById("dynamic-style-toggle"),
      toggleLabel: document.querySelector(".toggle-label"),
      tabBtns: document.querySelectorAll(".tab-btn"),
      tabContents: document.querySelectorAll(".tab-content"),
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

    // Dynamic style toggle
    if (this.elements.dynamicStyleToggle) {
      this.elements.dynamicStyleToggle.addEventListener("change", () =>
        this.toggleDynamicStyles()
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
    const useDynamicStyles = this.elements.dynamicStyleToggle.checked;

    // Replace all placeholders
    Object.keys(data).forEach((key) => {
      const placeholder = `{{${key}}}`;
      let value = data[key];

      // Handle special cases
      if (key === "specs" && Array.isArray(value)) {
        value = this.generateSpecsTable(value, useDynamicStyles);
      } else if (key === "key_value_list" && Array.isArray(value)) {
        value = this.generateEnhancedList(value, useDynamicStyles);
      } else if (key === "feature_list" && Array.isArray(value)) {
        value = this.generateFeatureList(value, useDynamicStyles);
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

  generateSpecsTable(specs, useDynamicStyles = true) {
    return specs
      .map((spec) => {
        if (useDynamicStyles) {
          const rowStyle = styleObjectToCss(STYLE_PRESETS.tableRow);
          const headerStyle = styleObjectToCss(STYLE_PRESETS.tableHeaderCell);
          const cellStyle = styleObjectToCss(STYLE_PRESETS.tableCell);

          return `
        <tr style="${rowStyle}">
          <td style="${headerStyle}">${spec.label}</td>
          <td style="${cellStyle}">${spec.value}</td>
        </tr>`;
        } else {
          return `
        <tr>
          <td>${spec.label}</td>
          <td>${spec.value}</td>
        </tr>`;
        }
      })
      .join("");
  }

  generateEnhancedList(items, useDynamicStyles = true) {
    return items
      .filter((item) => item && item.trim())
      .map((item) => {
        if (useDynamicStyles) {
          return createStyledListItem(item, STYLE_PRESETS.enhancedListItem);
        } else {
          return createStyledListItem(item);
        }
      })
      .join("");
  }

  generateFeatureList(features, useDynamicStyles = true) {
    return features
      .filter((feature) => feature && feature.trim())
      .map((feature) => {
        if (useDynamicStyles) {
          return createStyledListItem(feature, STYLE_PRESETS.featureBox, "✓");
        } else {
          return createStyledListItem(feature);
        }
      })
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
