// ===============================================
//              SAMPLE DATA SETS
// ===============================================

const SAMPLE_DATA = {
  // 한국 쇼핑몰 레인수트 데이터
  korean_rainsuit: {
    product_name: "데님 느낌 방수 레인수트 남녀공용 작업용 우비 세트",
    product_name_1: "데님 느낌 방수 레인수트 남녀공용 작업용 우비 세트",
    product_name_2: "가벼운 스트레치 데님풍 방수·방풍 레인웨어 상하세트",
    product_name_3: "빈티지 데님 프린트 생활방수 레인수트 작업복 우의",
    brand: "",
    category: "",
    country_of_origin: "",
    manufacturer: "",

    main_image:
      "https://workman.jp/shop/media/wysiwyg/item/2300067310035/1.jpg",
    image_overview:
      "https://workman.jp/shop/media/wysiwyg/item/2300067310035/1.jpg",
    image_details:
      "https://workman.jp/shop/media/wysiwyg/item/2300067310035/2.jpg",
    image_specs: "",

    product_intro:
      "3D 디지털 프린트 기술로 빈티지 데님 질감을 정교하게 표현한 레인수트입니다. 겉면뿐 아니라 안쪽까지 데님 느낌을 살린 정밀한 프린트가 특징으로, 실제 데님 같은 분위기를 느낄 수 있습니다.",

    key_value_list: [
      "신축성 있는 스트레치 소재로 편안한 활동성",
      "물이 잘 스며들지 않는 발수 기능",
      "바람 유입을 줄여주는 방풍 기능",
      "방수 / 내수압 10,000mm",
      "가벼운 착용감",
      "허리 밴드와 밑단 조절 기능으로 맞춤 핏 연출 가능",
      "소매·밑단·허리 등 다양한 조절 기능 탑재",
    ],
    use_case: "",
    value_proposition: "",
    feature_list: [
      "사이드 벤틸레이션 포켓(지퍼 + 벨크로 플랩)",
      "앞지퍼 + 스냅버튼 플랩",
      "턱 부분의 불편함을 줄여주는 친가드 적용",
      "후드 조절장치로 맞춤 핏 조절 가능",
      "소매 3단계, 밑단 2단계 스냅 조절",
      "팬츠 허리: 밴드 + 내부 끈으로 사이즈 조절, 밑단: 2단계 스냅 조절",
    ],

    model_number: "FHR010",
    size_info: "S／M／L／LL／3L (적용 신장 155~185cm, 가슴둘레 80~116cm 등)",
    material: "폴리에스터 100％",
    weight: "",
    components: "상의 / 하의",
  },

  // 클래식 스마트 디바이스 데이터 (영문)
  smart_device: {
    main_image:
      "https://via.placeholder.com/600x400/667eea/ffffff?text=Product+Image",
    brand_name: "Premium Brand",
    brand_subtitle: "Excellence in every detail",
    product_title: "Revolutionary Smart Device",
    product_subtitle:
      "Experience the future of technology with our innovative solution",
    price_label: "Special Launch Price",
    price: "$199.99",
    price_note: "Regular price $299.99 • Save $100",
    description: `Transform your daily routine with cutting-edge technology.

This revolutionary device combines elegant design with powerful functionality, delivering an unmatched user experience.

• Premium materials and craftsmanship
• Advanced smart features
• Seamless connectivity
• Long-lasting battery life`,
    specs: [
      { label: "Dimensions", value: "150 x 75 x 8mm" },
      { label: "Weight", value: "180g" },
      { label: "Display", value: "6.1 inch OLED" },
      { label: "Battery", value: "4000mAh" },
      { label: "Connectivity", value: "WiFi 6, Bluetooth 5.2" },
      { label: "Storage", value: "256GB" },
    ],
    cta_text: "Order Now",
    cta_link: "#order",
  },

  // 빈 템플릿 (사용자가 새로 작성할 때)
  empty: {
    product_name: "",
    product_name_1: "",
    product_name_2: "",
    product_name_3: "",
    brand: "",
    category: "",
    main_image:
      "https://via.placeholder.com/600x400/cccccc/ffffff?text=Product+Image",
    image_overview: "",
    image_details: "",
    product_intro: "",
    key_value_list: [],
    feature_list: [],
    model_number: "",
    size_info: "",
    material: "",
    weight: "",
    components: "",
  },
};
