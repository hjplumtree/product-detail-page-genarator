document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const templateEditor = document.getElementById("template-editor");
  const jsonEditor = document.getElementById("json-editor");
  const previewFrame = document.getElementById("preview-frame");
  const mergeBtn = document.getElementById("merge-btn");
  const clearBtn = document.getElementById("clear-btn");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Tab switching functionality
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      // Remove active class from all tabs and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      this.classList.add("active");
      document.getElementById(tabName + "-tab").classList.add("active");
    });
  });

  // 상세 스펙 테이블에서 숨길 필드들만 설정
  const hideEmptySpecFields = [
    "weight",
    "material",
    "components",
    "model_number",
    "size_info",
  ];

  // 값이 비어있는지 체크하는 함수
  function isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "string" && value.trim() === "")
    );
  }

  // Template merging function
  function mergeTemplate() {
    try {
      const template = templateEditor.value.trim();
      const jsonData = jsonEditor.value.trim();

      if (!template) {
        alert("Please enter a template");
        return;
      }

      if (!jsonData) {
        alert("Please enter JSON data");
        return;
      }

      // Parse JSON data
      let data;
      try {
        data = JSON.parse(jsonData);
      } catch (e) {
        alert("Invalid JSON format. Please check your JSON data.");
        return;
      }

      let mergedHtml = template;

      // 1단계: 일반 placeholder 처리
      Object.keys(data).forEach((key) => {
        const placeholder = `{{${key}}}`;
        let value = data[key];

        // Handle arrays (like key_value_list, feature_list)
        if (Array.isArray(value)) {
          const listItems = value
            .map((item) => `<li>${item}</li>`)
            .join("\n            ");
          value = listItems;
        }

        // 빈 값 처리
        if (isEmpty(data[key])) {
          value = "";
        }

        // Replace all occurrences of the placeholder
        mergedHtml = mergedHtml.replace(new RegExp(placeholder, "g"), value);
      });

      // 2단계: 상세 스펙 테이블에서 빈 필드의 해당 행만 제거
      hideEmptySpecFields.forEach((field) => {
        if (isEmpty(data[field])) {
          const fieldDisplayName = getFieldDisplayName(field);
          // 정확한 필드명과 placeholder를 포함한 tr 행을 찾아서 제거
          const trPattern = `<tr[^>]*>\\s*<th[^>]*[^<]*${fieldDisplayName}[^<]*</th>\\s*<td[^>]*>[^<]*</td>\\s*</tr>`;
          const trRegex = new RegExp(trPattern, "gi");
          mergedHtml = mergedHtml.replace(trRegex, "");
        }
      });

      // Update preview
      updatePreview(mergedHtml);
    } catch (error) {
      console.error("Error merging template:", error);
      alert(
        "Error merging template. Please check your template and JSON data."
      );
    }
  }

  // 필드 한글명 매칭 함수 (확장 가능)
  function getFieldDisplayName(field) {
    const fieldNames = {
      weight: "무게",
      material: "소재",
      components: "구성품",
      model_number: "모델명",
      size_info: "사이즈",
      brand: "브랜드",
      category: "카테고리",
    };
    return fieldNames[field] || field;
  }

  // Update preview function
  function updatePreview(htmlContent) {
    const previewDocument =
      previewFrame.contentDocument || previewFrame.contentWindow.document;

    const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        line-height: 1.6;
                        background-color: #f5f5f5;
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

  // Clear all function
  function clearAll() {
    if (confirm("Are you sure you want to clear all content?")) {
      templateEditor.value = "";
      jsonEditor.value = "";
      updatePreview(
        '<div style="text-align: center; padding: 50px; color: #999;">Enter template and JSON data, then click "Merge Template"</div>'
      );
    }
  }

  // Event listeners
  mergeBtn.addEventListener("click", mergeTemplate);
  clearBtn.addEventListener("click", clearAll);

  // Initial preview
  updatePreview(
    '<div style="text-align: center; padding: 50px; color: #999;">Enter template and JSON data, then click "Merge Template"</div>'
  );

  // Initial merge with sample data
  setTimeout(mergeTemplate, 100);
});
