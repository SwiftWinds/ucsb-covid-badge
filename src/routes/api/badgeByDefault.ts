import type { RequestHandler } from "@sveltejs/kit";

// POST endpoint to update badgeByDefault cookie
export const post: RequestHandler = async ({ request }) => {
  const { badgeByDefault } = await request.json();
  return {
    status: 200,
    headers: {
      "Set-Cookie": `badgeByDefault=${badgeByDefault}; SameSite=Strict; HttpOnly; Secure; Path=/`,
    },
  };
};
