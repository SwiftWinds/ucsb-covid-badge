<script lang="ts">
  import Header from "../lib/Header.svelte";
  import GoBack from "../lib/navigation/GoBack.svelte";
  import DarkModeSetting from "../lib/settings/DarkModeSetting.svelte";
  import BadgeByDefaultSetting
    from "../lib/settings/BadgeByDefaultSetting.svelte";
  import ClearBadgeSetting from "../lib/settings/ClearBadgeSetting.svelte";
</script>

<Header />
<main class="settings">
  <GoBack />
  <BadgeByDefaultSetting />
  <DarkModeSetting />
  <ClearBadgeSetting />
</main>

<style lang="postcss">
  .settings {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
