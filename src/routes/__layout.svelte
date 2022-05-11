<script lang="ts">
  import "../app.css";

  import SvelteTheme from "svelte-themes/SvelteTheme.svelte";

  import {
    badgeByDefault,
    name,
    permNum,
    persistentStore,
    pronouns,
    setBadgeByDefault,
    setName,
    setPermNum,
    setPronouns,
  } from "../lib/stores";
  import { session } from "$app/stores";
  import { browser } from "$app/env";
  import type { SessionStore } from "../hooks";
  import type { Writable } from "svelte/store";

  const INPUT_DEBOUNCE = 875;
  const TOGGLE_DEBOUNCE = 300;

  const settings = session as SessionStore;

  $: console.log($settings);

  setName(persistentStore("name", $settings.name));
  setPronouns(persistentStore("pronouns", $settings.pronouns));
  setPermNum(persistentStore("permNum", $settings.permNum));
  setBadgeByDefault(
    persistentStore("badgeByDefault", $settings.badgeByDefault)
  );

  const sync = (
    store: Writable<string | boolean>,
    key: string,
    delay = 0,
    routes: string[] = ["/"]
  ) => {
    let storeTimeout;
    store.subscribe(async (storeVal) => {
      if (storeVal === $settings[key]) {
        return;
      }
      session.update((sessionVal) => ({ ...sessionVal, [key]: storeVal }));
      if (storeTimeout) {
        console.log(`clearing timeout ${key}Timeout`);
        clearTimeout(storeTimeout);
      }
      storeTimeout = setTimeout(async () => {
        storeTimeout = null;
        await fetch(`/api/${key}`, {
          method: "POST",
          body: JSON.stringify(storeVal),
        });
        console.log(`sent da ${key}`, storeVal);
        await Promise.all(
          routes.map((route) => fetch(route, { credentials: "include" }))
        );
      }, delay);
    });
  };

  if (browser) {
    sync(name, "name", INPUT_DEBOUNCE);
    sync(pronouns, "pronouns");
    sync(permNum, "permNum", INPUT_DEBOUNCE);
    sync(badgeByDefault, "badgeByDefault", TOGGLE_DEBOUNCE, ["/", "/settings"]);
  }
</script>

<SvelteTheme />
<slot />
