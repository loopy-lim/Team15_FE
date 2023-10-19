import { rest } from "msw";

export const paymentMocks = [
  rest.get("/paymoney", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: { totalPiece: 50000 },
        error: null,
      })
    );
  }),
  rest.get("/payment/log", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            id: 1,
            piece: 10000,
            coinType: "결제",
            createAt: "2023-09-18 12:00:00",
          },
          {
            id: 1,
            piece: 50000,
            coinType: "결제",
            createAt: "2023-09-20 12:00:00",
          },
        ],
        error: null,
      })
    );
  }),
  rest.post("/payment/:id/create", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.post("payment/charge", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
];
