import type { Writable } from "svelte/store";
import type { Theme } from "../stores";
import type { GetSession } from "@sveltejs/kit";

export type SessionData = { theme: Theme };
export type SessionStore = Writable<SessionData>;

export const getCookieValue = (
  cookie: string | null,
  name: string
): string | null =>
  cookie?.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || null;

export const getSession: GetSession = ({ request }) => {
  const cookie = request.headers.get("cookie");
  console.log(cookie);
  const theme = getCookieValue(cookie, "theme") as Theme | null;
  return { theme };
};
