<script lang="ts">
  import OutlineBtn from "./base/OutlineBtn.svelte";
  import SettingsIcon from "../../icons/SettingsIcon.svelte";
</script>

<div class="settings-btn">
  <OutlineBtn href="/settings">
    <SettingsIcon slot="icon" />
    Settings
  </OutlineBtn>
</div>

<style lang="postcss">
  .settings-btn {
    margin-bottom: 2rem;
  }
</style>
