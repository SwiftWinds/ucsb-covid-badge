<script lang="ts">
  import DarkModeIcon from "../icons/DarkModeIcon.svelte";
  import { setTheme, theme, Theme } from "../../stores.ts";
  import Setting from "./base/Setting.svelte";

  const handleThemeChange = async (e) => {
    const theme = e.target.checked ? Theme.Dark : Theme.Light;
    await setTheme(theme);
  };
</script>

<Setting
  checked={$theme === Theme.Dark}
  on:change={handleThemeChange}
  setting="dark-mode"
>
  <DarkModeIcon slot="icon" />
  Dark Mode
</Setting>

<style lang="postcss">
  :global(#theme-container.dark [setting="dark-mode"]) {
    --icon-color: invert(66%) sepia(61%) saturate(201%) hue-rotate(193deg) brightness(155%) contrast(98%);
    --icon-bg-color: #3a3e84;
  }

  :global(#theme-container.light [setting="dark-mode"]) {
    --icon-color: invert(27%) sepia(100%) saturate(5879%) hue-rotate(250deg) brightness(97%) contrast(102%);
    --icon-bg-color: #ecebff;
  }
</style>
