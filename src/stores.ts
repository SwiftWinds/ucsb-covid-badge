import { localStorage, persist } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

export const name = persist(writable(), localStorage(), "name");
export const pronouns = persist(writable(), localStorage(), "pronouns");
export const profilePic = persist(writable(), localStorage(), "profilePic");
export const permNum = persist(writable(), localStorage(), "permNum");
