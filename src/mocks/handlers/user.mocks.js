import { rest } from "msw";

export const UserMocks = [
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
];
