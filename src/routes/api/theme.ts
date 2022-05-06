import type { RequestHandler } from "@sveltejs/kit";

// POST endpoint to update theme
export const post: RequestHandler = async ({ request }) => {
  const { theme } = await request.json();
  return {
    status: 200,
    headers: {
      "Set-Cookie": `theme=${theme}; SameSite=Strict; HttpOnly; Secure`,
    },
  };
};
