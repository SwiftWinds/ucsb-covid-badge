import type { RequestHandler } from "@sveltejs/kit";

// POST endpoint to update badgeByDefault cookie
export const post: RequestHandler = async ({ params, request }) => {
  const { key } = params;
  const val = await request.text();
  return {
    status: 200,
    headers: {
      "Set-Cookie": `${key}=${val}; SameSite=Strict; HttpOnly; Path=/`,
    },
  };
};
