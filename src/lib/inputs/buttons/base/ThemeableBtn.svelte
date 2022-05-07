<script lang="ts">
  export let variant, ref, theme;
</script>

<button
  {...$$restProps}
  bind:this={ref}
  class={variant}
  on:click
  {theme}
  type="button">
  <slot />
</button>


<style>
  button {
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--btn-bg);
    padding: 0.625rem 1.25rem;

    font-size: 0.875rem;
    line-height: 1.25rem;

    font-weight: 500;
    color: white;
  }

  button:hover {
    background-color: var(--btn-bg-hover);
  }

  button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: 0 0 0 4px var(--btn-ring);
  }

  .bold {
    font-weight: bold;
  }
</style>
