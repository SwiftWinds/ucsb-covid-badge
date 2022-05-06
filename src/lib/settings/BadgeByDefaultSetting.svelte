<script lang="ts">
  import { setTheme, theme, Theme } from "../../stores.ts";
  import Setting from "./base/Setting.svelte";
  import BadgeIcon from "../icons/BadgeIcon.svelte";

  const handleThemeChange = async (e) => {
    const theme = e.target.checked ? Theme.Dark : Theme.Light;
    await setTheme(theme);
  };
</script>

<Setting
  checked={$theme === Theme.Dark}
  on:change={handleThemeChange}
  setting="badge-by-default"
>
  <BadgeIcon slot="icon" />
  <div class="label">
    Show Badge By Default
  </div>
</Setting>

<style lang="postcss">
  :global(#theme-container.dark [setting="badge-by-default"]) {
    --icon-bg-color: #243e7f;
    --icon-color: invert(74%) sepia(31%) saturate(550%) hue-rotate(176deg) brightness(204%) contrast(99%);
  }

  :global(#theme-container.light [setting="badge-by-default"]) {
    --icon-bg-color: #e7f8ff;
    --icon-color: invert(52%) sepia(90%) saturate(1734%) hue-rotate(172deg) brightness(95%) contrast(94%);
  }

  .label {
    max-width: 100px;
  }
</style>
