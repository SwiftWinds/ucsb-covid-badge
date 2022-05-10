<script lang="ts">
  import { badgeByDefault, setBadgeByDefault } from "../../stores.ts";
  import ToggleSetting from "./base/ToggleSetting.svelte";
  import BadgeIcon from "../icons/BadgeIcon.svelte";

  $: console.log("badgeByDefault", $badgeByDefault);

  const handleBadgeByDefaultChange = async (e) => {
    const badgeByDefault = e.target.checked;
    await setBadgeByDefault(badgeByDefault);
    const version = __KIT_VERSION__;
    console.log("version", version);

    // revalidate dependent routes
    const routes = ["/", "/settings"];
    await Promise.all(
      routes.map(async (route) => {
        const response = await fetch(route, {
          credentials: "include",
        });
        const text = await response.text();
        console.log("fetched", route, text);
      })
    );
  };
</script>

<ToggleSetting
  checked={$badgeByDefault}
  on:change={handleBadgeByDefaultChange}
  setting="badge-by-default"
>
  <BadgeIcon slot="icon" />
  <div class="label">Show Badge By Default</div>
</ToggleSetting>

<style lang="postcss">
  :global([data-theme="dark"] [setting="badge-by-default"]) {
    --icon-bg-color: #243e7f;
    --icon-color: invert(74%) sepia(31%) saturate(550%) hue-rotate(176deg)
      brightness(204%) contrast(99%);
  }

  :global([data-theme="light"] [setting="badge-by-default"]) {
    --icon-bg-color: #e7f8ff;
    --icon-color: invert(52%) sepia(90%) saturate(1734%) hue-rotate(172deg)
      brightness(95%) contrast(94%);
  }

  .label {
    max-width: 100px;
  }
</style>
