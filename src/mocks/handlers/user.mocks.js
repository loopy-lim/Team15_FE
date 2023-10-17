import { rest } from "msw";

export const userMocks = [
  rest.post("/user/join", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.post("/user/join/check", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.post("/user/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.post("/user/logout", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: null,
        error: null,
      })
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          id: 1,
          universityName: "전남대학교",
          nickname: "loopy",
          idCardImagePath: "https://placehold.co/400",
        },
        error: null,
      })
    );
  }),
  rest.patch("/user", (req, res, ctx) => {
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
