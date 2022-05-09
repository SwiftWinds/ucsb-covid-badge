import type { Writable } from "svelte/store";
import type { GetSession } from "@sveltejs/kit";

export type SessionData = { badgeByDefault: boolean };
export type SessionStore = Writable<SessionData>;

export const getCookieValue = (
  cookie: string | null,
  name: string
): string | null =>
  cookie?.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || null;

export const getSession: GetSession = ({ request }) => {
  const cookie = request.headers.get("cookie");
  const badgeByDefault = getCookieValue(cookie, "badgeByDefault") === "true";
  return { badgeByDefault };
};
