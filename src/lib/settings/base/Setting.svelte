<script lang="ts">
  import SettingIcon from "./SettingIcon.svelte";

  export let setting;
</script>

<div class="setting">
  <div class="left">
    <SettingIcon {setting}>
      <slot name="icon" />
    </SettingIcon>
    <div class="label">
      <slot />
    </div>
  </div>
  <slot name="input" />
</div>

<style lang="postcss">
  .setting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0.5rem 0;
    width: 350px;
  }

  .left {
    display: flex;
    align-items: center;
  }
</style>
