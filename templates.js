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
        line-height: 1.5;
    "
>

    <!-- ============================== -->
    <!-- 00. MAIN IMAGE -->
    <!-- ============================== -->
    <div style="margin: 24px 0; text-align: center;">
        <img src="{{main_image}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto; border-radius: 6px; display: block;" />
    </div>

    <!-- ============================== -->
    <!-- 00-1. KEY VALUE SUMMARY (핵심 요약) -->
    <!-- ============================== -->
    <div
        style="
            margin-top: 16px;
            padding: 18px 20px;
            background: #f5f7fb;
            border-left: 4px solid #1b3b6f;
            border-radius: 6px;
            font-size: 15px;
            color: #333;
        "
    >
        <strong style="font-size: 17px; color: #1b3b6f;">이 제품 한눈에 보기</strong><br />
        • {{summary_01}} <br />
        • {{summary_02}} <br />
        • {{summary_03}}
    </div>

    <!-- ============================== -->
    <!-- 01. BRAND HEADER -->
    <!-- ============================== -->
    <div
        style="
            padding: 24px 0 18px;
            text-align: center;
            border-bottom: 1px solid #eee;
        "
    >
        <div style="font-size: 22px; font-weight: 700; color: #1b3b6f;">
            Culture Fleet
        </div>
        <div style="font-size: 14px; color: #555;">
            문화 무역 함대 컬처플릿
        </div>
    </div>

    <!-- ============================== -->
    <!-- 02. TRUST SUMMARY (구매대행 안내) -->
    <!-- ============================== -->
    <div
        style="
            padding: 20px 24px;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-left: 4px solid #1b3b6f;
            border-radius: 6px;
            margin-top: 28px;
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
            해외 정품 구매대행 안내
        </div>
        <div style="font-size: 14px; color: #333;">
            • 컬처플릿은 해외 정식 판매처에서 구매하여 전달합니다.<br />
            • 평균 배송기간: <strong>7~14일</strong><br />
            • 해외배송비는 상품가에 포함되어 있습니다.<br />
            • 총 결제금액 <strong>150달러 초과 시 관·부가세</strong>가 발생할 수 있어요.<br />
            • 품절/구매 불가 시 즉시 <strong>전액 환불</strong>됩니다.
        </div>
    </div>

    <!-- ============================== -->
    <!-- 03. PRODUCT IMAGES -->
    <!-- ============================== -->
    <div style="margin-top: 40px; text-align: center;">

        <img src="{{image_overview_01}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto 18px; display: block; border-radius: 6px;" />

        <img src="{{image_overview_02}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto 18px; display: block; border-radius: 6px;" />

        <img src="{{image_details_01}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto 18px; display: block; border-radius: 6px;" />

        <img src="{{image_details_02}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto 18px; display: block; border-radius: 6px;" />

        <img src="{{image_specs}}" 
             style="width: 100%; max-width: 760px; margin: 0 auto 18px; display: block; border-radius: 6px;" />
    </div>

    <!-- ============================== -->
    <!-- 04. KEY VALUE (핵심 장점) 최대 3개 -->
    <!-- ============================== -->
    <div style="margin-top: 40px;">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 12px;
            "
        >
            이 제품의 주요 장점
        </div>
        <ul style="padding-left: 18px; margin: 0; font-size: 15px; color: #333; list-style-type: disc;">
            {{key_value_list}}
        </ul>
    </div>

    <!-- ============================== -->
    <!-- 05. PRODUCT DESCRIPTION -->
    <!-- ============================== -->
    <div style="margin-top: 34px;">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 12px;
            "
        >
            제품 소개
        </div>
        <div style="font-size: 15px; color: #333; line-height: 1.55;">
            {{product_intro}}<br />
            {{use_case}}<br />
            {{value_proposition}}
        </div>
    </div>

    <!-- ============================== -->
    <!-- 06. FEATURES (주요 특징) 최대 5개-->
    <!-- ============================== -->
    <div style="margin-top: 34px;">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 12px;
            "
        >
            주요 특징
        </div>
        <ul style="padding-left: 18px; margin: 0; font-size: 15px; color: #333;">
            {{feature_list}}
        </ul>
    </div>

    <!-- ============================== -->
    <!-- 07. SPEC TABLE -->
    <!-- ============================== -->
    <div style="margin-top: 40px;">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 14px;
            "
        >
            상세 스펙
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tbody>
                <tr>
                    <th style="width: 25%; background: #fafafa; padding: 10px;">제품명</th>
                    <td style="padding: 10px;">{{product_name}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px;">모델명</th>
                    <td style="padding: 10px;">{{model_number}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px;">사이즈</th>
                    <td style="padding: 10px;">{{size_info}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px;">소재</th>
                    <td style="padding: 10px;">{{material}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px;">무게</th>
                    <td style="padding: 10px;">{{weight}}</td>
                </tr>
                <tr>
                    <th style="background: #fafafa; padding: 10px;">구성품</th>
                    <td style="padding: 10px;">{{components}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- ============================== -->
    <!-- 08. SHIPPING & POLICY -->
    <!-- ============================== -->
    <div
        style="
            margin-top: 28px;
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
        <div style="font-size: 14px; color: #333;">
            • 국내외 물류 상황에 따라 배송이 지연될 수 있어요.<br />
            • 해외 운송 특성상 박스 눌림/스크래치가 발생할 수 있습니다.<br />
            • 단순 변심은 환불이 어려워요 (해외 구매 즉시 진행).<br />
            • 초기 불량/오배송: 사진 확인 후 <strong>전액 환불</strong> 가능합니다.<br />
            • 교환은 환불 후 재구매 방식으로 진행돼요.
        </div>
    </div>

    <!-- ============================== -->
    <!-- 09. FAQ -->
    <!-- ============================== -->
    <div style="margin-top: 40px;">
        <div
            style="
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid #1b3b6f;
                padding-left: 10px;
                margin-bottom: 14px;
            "
        >
            FAQ
        </div>

        <div style="font-size: 14px; margin-bottom: 10px;">
            <strong style="color: #1b3b6f;">Q. 정품인가요?</strong><br />
            A. 네. 컬처플릿은 해외 정식 판매처에서만 구매합니다.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px;">
            <strong style="color: #1b3b6f;">Q. 주문 후에는 어떻게 진행되나요?</strong><br />
            A. 주문 즉시 해외에서 구매가 진행되며, 배송 단계별 알림을 드립니다.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px;">
            <strong style="color: #1b3b6f;">Q. 배송은 얼마나 걸리나요?</strong><br />
            A. 평균 7~14일 소요됩니다.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px;">
            <strong style="color: #1b3b6f;">Q. 관부가세는 언제 발생하나요?</strong><br />
            A. 총 결제금액이 150달러를 초과하면 부과될 수 있어요.
        </div>

        <div style="font-size: 14px; margin-bottom: 10px;">
            <strong style="color: #1b3b6f;">Q. A/S가 가능한가요?</strong><br />
            A. 해외 구매대행 특성상 국내 A/S는 어려워요.<br />
            초기 불량 시 사진 확인 후 <strong>전액 환불</strong>로 도와드립니다.
        </div>
    </div>

    <!-- ============================== -->
    <!-- 10. BRAND STORY -->
    <!-- ============================== -->
    <div
        style="margin-top: 48px; padding-top: 22px; border-top: 1px solid #eee;"
    >
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 10px;">
            Culture Fleet • 문화(Culture)를 무역하는 함대(Fleet)
        </div>
        <div style="font-size: 14px; color: #555; line-height: 1.6;">
            컬처플릿은 전 세계의 다양한 문화를 전달합니다.<br />
            문화적 가치, 고품질, 재미 그리고 실용성을 기준으로 상품을 엄선하여,<br />
						검증된 해외 판매처의 제품만을 선별해서 소개합니다.
        </div>
    </div>
</div>

 `;
