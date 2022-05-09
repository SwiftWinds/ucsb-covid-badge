<script lang="ts">
  import ThemeableBtn from "./base/ThemeableBtn.svelte";

  export let variant = "";
  export let ref = null;
</script>

<ThemeableBtn
  {...$$restProps}
  bind:ref
  on:click
  theme="danger"
  type="button"
  {variant}>
  Clear
</ThemeableBtn>


<style lang="postcss">
  :global([theme="danger"]) {
    --btn-text: white;
  }

  :global([data-theme="dark"] [theme="danger"]) {
    --btn-bg: #dc2626;
    --btn-bg-hover: #b91c1c;
    --btn-ring: #7f1d1d;
  }

  :global([data-theme="light"] [theme="danger"]) {
    --btn-bg: #ef4444;
    --btn-bg-hover: #dc2626;
    --btn-ring: #fca5a5;
  }
</style>
