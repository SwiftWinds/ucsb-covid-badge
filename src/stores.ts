import { writable } from "svelte/store";
import { browser } from "$app/env";

const persistentStore = (key: string) => {
  const store = writable((browser && localStorage.getItem(key)) || "");
  store.subscribe((value) => {
    if (browser) {
      localStorage.setItem(key, value);
    }
  });
  return store;
};

export const name = persistentStore("name");
export const pronouns = persistentStore("pronouns");
export const profilePic = persistentStore("profilePic");
export const permNum = persistentStore("permNum");
