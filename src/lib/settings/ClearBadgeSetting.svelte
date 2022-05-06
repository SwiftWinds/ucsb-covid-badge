<script lang="ts">
  import { setTheme, theme, Theme } from "../../stores.ts";
  import TrashIcon from "../icons/TrashIcon.svelte";
  import Setting from "./base/Setting.svelte";
  import DangerBtn from "../inputs/buttons/DangerBtn.svelte";

  const handleThemeChange = async (e) => {
    const theme = e.target.checked ? Theme.Dark : Theme.Light;
    await setTheme(theme);
  };
</script>

<Setting
  checked={$theme === Theme.Dark}
  on:change={handleThemeChange}
  setting="clear-badge"
>
  <TrashIcon slot="icon" />
  Clear badge
  <DangerBtn slot="input" />
</Setting>

<style lang="postcss">
  :global(#theme-container.dark [setting="clear-badge"]) {
    --icon-bg-color: #532f58;
    --icon-color: invert(70%) sepia(23%) saturate(598%) hue-rotate(298deg) brightness(200%) contrast(103%);
  }

  :global(#theme-container.light [setting="clear-badge"]) {
    --icon-bg-color: #ffe7ed;
    --icon-color: invert(25%) sepia(98%) saturate(4103%) hue-rotate(335deg) brightness(102%) contrast(98%);
  }
</style>
