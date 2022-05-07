<script lang="ts">
  import ThemeableBtn from "./base/ThemeableBtn.svelte";

  export let variant, ref;
</script>

<ThemeableBtn
  {...$$restProps}
  bind:ref
  on:click
  theme="neutral"
  type="button"
  {variant}>
  Clear
</ThemeableBtn>


<style lang="postcss">
  :global([theme="neutral"]) {
  }

  :global(#theme-container.light [theme="neutral"]) {
    --btn-bg: white;
    --btn-text: #111827;
    --btn-bg-hover: #f3f4f6;
    --btn-ring: #e5e7eb;
  }

  :global(#theme-container.dark [theme="neutral"]) {
    --btn-bg: #1f2937;
    --btn-text: white;
    --btn-bg-hover: #374151;
    --btn-ring: #374151;
  }
</style>
