import { rest } from "msw";

export const rentalMocks = [
  rest.get("/rental", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            productId: 1,
            name: "아이패드",
            borrowAt: `${new Date(
              new Date().getTime() + 10 * 60 * 60 * 24 * 1000
            )}`,
            returnAt: `${new Date(
              new Date().getTime() + 30 * 60 * 60 * 24 * 1000
            )}`,
            reviewed: false,
          },
          {
            productId: 2,
            name: "아이패드",
            borrowAt: `${new Date()}`,
            returnAt: `${new Date(
              new Date().getTime() + 30 * 60 * 60 * 24 * 1000
            )}`,
            reviewed: false,
          },
          {
            productId: 3,
            name: "아이패드",
            borrowAt: `${new Date(
              new Date().getTime() - 30 * 60 * 60 * 24 * 1000
            )}`,
            returnAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 1000)}`,
            reviewed: false,
          },
          {
            productId: 4,
            name: "아이패드",
            borrowAt: `${new Date(
              new Date().getTime() - 30 * 60 * 60 * 24 * 1000
            )}`,
            returnAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 1000)}`,
            reviewed: true,
          },
        ],
        error: null,
      })
    );
  }),
  rest.post("/rental/:id/return", (req, res, ctx) => {
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
