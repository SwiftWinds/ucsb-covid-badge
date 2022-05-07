<script lang="ts">
  import ThemeableBtn from "./base/ThemeableBtn.svelte";

  export let variant, ref;
</script>

<ThemeableBtn
  {...$$restProps}
  on:click
  {ref}
  type="button"
  {variant}>
  Clear
</ThemeableBtn>


<style>
  :global(#theme-container.dark [theme="danger"]) {
    --btn-bg: #dc2626;
    --btn-bg-hover: #b91c1c;
    --btn-ring: #7f1d1d;
  }

  :global(#theme-container.light [theme="danger"]) {
    --btn-bg: #ef4444;
    --btn-bg-hover: #dc2626;
    --btn-ring: #fca5a5;
  }
</style>
