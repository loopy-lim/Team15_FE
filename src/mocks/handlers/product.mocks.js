import { rest } from "msw";

export const productData = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  category: "IT",
  productName: "아이패드",
  rentalPrice: 40000,
  regularPrice: 12000000,
  review: 4,
  location: "전남대 제 1학생회관",
  productImagePath: [
    "https://placehold.co/400",
    "https://placehold.co/400",
    "https://placehold.co/400",
  ],
  companyName: "학생복지스토어",
  companyImagePath: "https://placehold.co/400",
  content:
    "**프로세서 (CPU):**\n- Intel 10세대 Core i5 또는 i7 프로세서\n- 4코어 또는 6코어 옵션\n\n**그래픽 (GPU):**\n- Intel Iris Plus Graphics 또는 AMD Radeon Pro 그래픽\n\n**메모리 (RAM):**\n\n- 8GB, 16GB, 32GB 또는 64GB RAM 옵션\n\n **저장장치 (스토리지):**\n- 256GB, 512GB, 1TB, 2TB 또는 4TB SSD 옵션\n일반적인 예시이며, 실제 제품 구성은 지역 및 모델에 따라 다를 수 있습니다. 맥북 프로는 사용자의 요구 사항에 맞게 다양한 구성 옵션을 제공하기 때문에, 구매 시 자신에게 가장 적합한 사양을 선택할 수 있습니다. 최신 정보를 얻기 위해서는 애플 공식 웹사이트나 매장에서 확인",
}));
export const productMocks = [
  rest.get("/product", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: productData,
        error: null,
      })
    );
  }),
  rest.get("/product/:id", (req, res, ctx) => {
    const { id } = req.params;
    const product = productData.find((product) => product.id === Number(id));

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: product,
        error: null,
      })
    );
  }),
  rest.post("/product/:id/rent", (req, res, ctx) => {
    const { id } = req.params;
    const product = productData.find((product) => product.id === Number(id));

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: product,
        error: null,
      })
    );
  }),
];
