import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = {
    dev: " (c) : amex / @macl2189"
  }
  return new Response(JSON.stringify(body), { status: 200 , headers: { "Content-Type": "application/json" } });
};
