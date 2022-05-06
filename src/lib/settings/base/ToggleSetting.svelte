<script lang="ts">
  import Toggle from "./Toggle.svelte";
  import Setting from "./Setting.svelte";

  export let checked, setting;
</script>

<Setting {setting}>
  <slot name="icon" slot="icon" />
  <slot />
  <Toggle {checked} on:change slot="input" />
</Setting>
