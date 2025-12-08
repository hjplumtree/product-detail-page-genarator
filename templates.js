// ===============================================
//              HTML TEMPLATE
// ===============================================

const TEMPLATES = `
<!-- ======================================== -->
<!--   C U L T U R E   F L E E T  TEMPLATE   -->
<!-- ======================================== -->

<div
    style="
        max-width: 880px;
        margin: 0 auto;
        font-family: 'Noto Sans KR', sans-serif;
        color: #1a1a1a;
        line-height: 1.65;
    "
>
    <!-- 00. MAIN IMAGE -->
    <div style="margin: 24px 0; text-align: center;">
        <img src="{{main_image}}" style="width: 100%; border-radius: 6px" />
    </div>

    <!-- 01. BRAND HEADER -->
    <div
        style="
            padding: 28px 0 20px;
            text-align: center;
            border-bottom: 1px solid #eee;
        "
    >
        <div style="font-size: 22px; font-weight: 700; color: #1b3b6f">
            Culture Fleet
        </div>
        <div style="font-size: 14px; color: #555">
            문화 무역 함대 컬처플릿
        </div>
    </div>

    <!-- 02. TRUST SUMMARY (구매대행 안내) -->
    <div
        style="
            padding: 28px 24px;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-left: 4px solid #1b3b6f;
            border-radius: 6px;
            margin-top: 32px;
        "
    >
        <div
            style="
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 12px;
                color: #1b3b6f;
            "
        >
            해외 정품 구매대행 안내
        </div>
        <div style="font-size: 14px; color: #333">
            • 컬처플릿은 해외 정식 판매처에서 구매하여 전달합니다.<br />
            • 평균 배송기간: <strong>7~14일</strong><br />
            • 해외배송비는 상품가에 포함되어 있습니다.<br />
            • 해외 상품 총 결제금액이 <strong>150달러</strong>를 초과하는 경우 관·부가세가 부과될 수 있어요.<br />
            • 품절/구매 불가 시 즉시 <strong>전액 환불</strong> 처리됩니다.
        </div>
    </div>
    
        <!-- ======================================== -->
    <!--  IMAGE GUIDELINES (Recommended 6 images) -->
    <!-- ======================================== -->
    <!--
    IMAGE RULES (Recommended total: 6 images)

    1. main_image (1 photo)
       - The best hero image representing the product

    2. image_overview (2 photos)
       - Full-body or full-product shots from different angles
       - Lifestyle / usage scenes if available

    3. image_details (2 photos)
       - Close-ups: fabric, pattern, pockets, stitching, special features

    4. image_specs (1 photo)
       - Size chart, technical infographic, manufacturer spec image

    Total recommended images: 6
    -->


    <!-- 03. PRODUCT IMAGES -->
    <div style="margin-top: 40px; text-align: center;">
        <div style="margin-bottom: 18px">{{image_overview}}</div>
        <div style="margin-bottom: 18px">{{image_details}}</div>
        <div style="margin-bottom: 18px">{{image_specs}}</div>
    </div>

    <!-- 04. KEY VALUE (핵심 장점: 3개) -->
    <div style="margin-top: 40px">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 16px;
            "
        >
            이 제품의 주요 장점
        </div>
        <ul style="padding-left: 20px; margin: 0; font-size: 15px; color: #333; list-style-type: disc;">
            {{key_value_list}}
        </ul>
    </div>

    <!-- 05. PRODUCT DESCRIPTION -->
    <div style="margin-top: 36px">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 14px;
            "
        >
            제품 소개
        </div>
        <div style="font-size: 15px; color: #333">
            {{product_intro}}<br /><br />
            {{use_case}}<br /><br />
            {{value_proposition}}
        </div>
    </div>

    <!-- 06. FEATURES (주요 특징: 5개) -->
    <div style="margin-top: 36px">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 14px;
            "
        >
            주요 특징
        </div>
        <ul style="padding-left: 20px; margin: 0; font-size: 15px; color: #333">
            {{feature_list}}
        </ul>
    </div>

    <!-- 07. SPEC TABLE -->
    <div style="margin-top: 40px">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 16px;
            "
        >
            상세 스펙
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 15px">
            <tbody>
                <tr>
                    <th style="width: 25%; background: #fafafa; padding: 10px">제품명</th>
                    <td style="padding: 10px">{{product_name}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px">모델명</th>
                    <td style="padding: 10px">{{model_number}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px">사이즈</th>
                    <td style="padding: 10px">{{size_info}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px">소재</th>
                    <td style="padding: 10px">{{material}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px">무게</th>
                    <td style="padding: 10px">{{weight}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px">구성품</th>
                    <td style="padding: 10px">{{components}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 08. SHIPPING & POLICY -->
    <div
        style="
            margin-top: 32px;
            padding: 20px;
            background: #f9fafc;
            border: 1px solid #dbe2ee;
            border-left: 4px solid #1b3b6f;
            border-radius: 6px;
        "
    >
        <div
            style="
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #1b3b6f;
            "
        >
            배송 · 환불 · 교환 안내
        </div>
        <div style="font-size: 14px; color: #333">
            • 국내외 물류 상황에 따라 배송이 지연될 수 있어요.<br />
            • 해외 운송 특성상 박스 눌림/스크래치가 발생할 수 있습니다.<br />
            • 단순 변심은 환불이 어려워요 (해외 구매 즉시 진행).<br />
            • 초기 불량/오배송: 사진 확인 후 <strong>전액 환불</strong> 가능합니다.<br />
            • 교환은 환불 후 재구매 방식으로 진행돼요.
        </div>
    </div>

    <!-- 09. FAQ -->
    <div style="margin-top: 40px">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 16px;
            "
        >
            FAQ
        </div>

        <div style="font-size: 14px; margin-bottom: 10px">
            <strong style="color: #1b3b6f">Q. 정품인가요?</strong><br />
            A. 네. 컬처플릿은 해외 정식 판매처에서만 구매합니다.
        </div>
        
         <div style="font-size: 14px; margin-bottom: 10px">
            <strong style="color: #1b3b6f">Q. 주문 후에는 어떻게 진행되나요?</strong><br />
	          A. 주문 즉시 해외에서 구매가 진행되며, 배송 단계별 알림을 드립니다.
				   배송 지연 또는 예외 상황이 발생하면 즉시 안내드립니다.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px">
            <strong style="color: #1b3b6f">Q. 배송은 얼마나 걸리나요?</strong><br />
            A. 해외 구매대행 특성상 평균 7~14일 소요됩니다.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px">
            <strong style="color: #1b3b6f">Q. 관부가세는 언제 발생하나요?</strong><br />
            A. 총 결제금액이 150달러를 초과하면 관·부가세가 부과될 수 있어요.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px">
            <strong style="color: #1b3b6f">Q. A/S가 가능한가요?</strong><br />
            A. 해외 구매대행 특성상 국내 공식 A/S는 어렵습니다.<br />
            초기 불량 시 사진 확인 후 <strong>전액 환불</strong>로 도와드려요.
        </div>
                
    </div>

    <!-- 10. BRAND STORY -->
    <div
        style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #eee"
    >
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px">
            Culture Fleet • 문화(Culture)를 무역하는 함대(Fleet)
        </div>
        <div style="font-size: 14px; color: #555">
            전 세계 다양한 문화를 제품의 형태로 전달하는 컬처플릿은<br />
            신뢰할 수 있는 해외 판매처에서만 제품을 엄선합니다.<br />
            고객에게 정확한 정보와 높은 신뢰를 제공하는 것이 우리의 첫 번째 가치입니다.
        </div>
    </div>
</div>
 

`;
