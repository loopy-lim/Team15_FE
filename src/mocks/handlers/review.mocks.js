import { rest } from "msw";

export const reviewMocks = [
  rest.get("/review/:id", (req, res, ctx) => {
    return {
      success: true,
      response: {
        star: 5,
        content: "완전 좋아요~",
      },
      error: null,
    };
  }),
  rest.post("/review/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.patch("/review/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.delete("/review/:id", (req, res, ctx) => {
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
