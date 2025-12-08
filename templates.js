// ===============================================
//              PRODUCT PAGE TEMPLATES
// ===============================================

const TEMPLATES = {
  // 한국 쇼핑몰 최적화 템플릿
  korean_ecommerce: `<div style="max-width: 880px; margin: 0 auto; font-family: 'Noto Sans KR', sans-serif; color: #1a1a1a; line-height: 1.65;">
  
  <!-- Main Product Image -->
  <div style="margin: 24px 0; text-align: center">
    <img src="{{main_image}}" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1)" />
  </div>

  <!-- Product Title -->
  <div style="margin: 40px 0 32px; text-align: center;">
    <h1 style="font-size: 28px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.4;">{{product_name}}</h1>
    <div style="font-size: 14px; color: #666; margin-top: 16px;">
      <span style="margin-right: 16px;">📦 모델명: {{model_number}}</span>
      <span style="margin-right: 16px;">🏭 소재: {{material}}</span>
      <span>📏 사이즈: {{size_info}}</span>
    </div>
  </div>

  <!-- Product Introduction -->
  <div style="background: #f8f9fa; padding: 24px; border-radius: 12px; margin-bottom: 40px; border-left: 4px solid #1b3b6f;">
    <div style="font-size: 16px; color: #333; line-height: 1.7;">{{product_intro}}</div>
  </div>

  <!-- Key Value Points -->
  <div style="margin-bottom: 40px;">
    <h2 style="font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">✨ 주요 특징</h2>
    <ul style="list-style: none; padding: 0; margin: 0;">
      {{key_value_list}}
    </ul>
  </div>

  <!-- Features -->
  <div style="margin-bottom: 40px;">
    <h2 style="font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">🔧 상세 기능</h2>
    <div style="margin: 0;">
      {{feature_list}}
    </div>
  </div>

  <!-- Product Images -->
  <div style="margin-bottom: 40px;">
    <h2 style="font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #1b3b6f;">📸 상품 상세</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
      <img src="{{image_overview}}" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1)" />
      <img src="{{image_details}}" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1)" />
    </div>
  </div>

  <!-- Alternative Product Names -->
  <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 40px;">
    <h3 style="font-size: 16px; font-weight: 600; color: #1565c0; margin-bottom: 12px;">🏷️ 추천 상품명</h3>
    <div style="font-size: 14px; color: #333; line-height: 1.6;">
      <div style="margin-bottom: 4px;">1️⃣ {{product_name_1}}</div>
      <div style="margin-bottom: 4px;">2️⃣ {{product_name_2}}</div>
      <div>3️⃣ {{product_name_3}}</div>
    </div>
  </div>

</div>`,

  // 클래식 제품 페이지 템플릿 (영문용)
  classic_product: `<div style="max-width: 880px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.65;">
  
  <!-- Main Product Image -->
  <div style="margin: 24px 0; text-align: center">
    <img src="{{main_image}}" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1)" />
  </div>

  <!-- Brand Header -->
  <div style="padding: 28px 0 20px; text-align: center; border-bottom: 1px solid #eee;">
    <div style="font-size: 24px; font-weight: 700; color: #1b3b6f">{{brand_name}}</div>
    <div style="font-size: 14px; color: #666;">{{brand_subtitle}}</div>
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

  <!-- Call to Action -->
  <div style="text-align: center; margin-top: 48px;">
    <a href="{{cta_link}}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
      {{cta_text}}
    </a>
  </div>

</div>`,
};
