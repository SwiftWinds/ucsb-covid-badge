import type { Writable } from "svelte/store";
import type { GetSession } from "@sveltejs/kit";

export type Settings = {
  name: string;
  pronouns: string;
  permNum: string;
  badgeByDefault: boolean;
};

export type SessionStore = Writable<Settings>;

export const getCookieValue = (
  cookie: string | null,
  name: string
): string | null =>
  cookie?.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || null;

const defaultSettings: Settings = {
  name: "",
  pronouns: "",
  permNum: "",
  badgeByDefault: false,
};

export const getSession: GetSession = ({ request }) => {
  const cookie = request.headers.get("cookie");
  const settings: Record<string, unknown> = {};
  for (const [key, defaultVal] of Object.entries(defaultSettings)) {
    settings[key] = JSON.parse(getCookieValue(cookie, key)) ?? defaultVal;
  }
  console.log("session", settings);
  return settings as Settings;
};
