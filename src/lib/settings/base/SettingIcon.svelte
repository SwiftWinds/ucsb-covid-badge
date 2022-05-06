<script lang="ts">
  export let setting;
</script>

<div class="icon-container" {setting}>
  <slot />
</div>

<style lang="postcss">
  .icon-container :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
    filter: var(--icon-color);
  }

  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--icon-bg-color);
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.75rem;
  }

  .icon-container:before {
    content: "";
    float: left;
    width: auto;
    padding-bottom: 100%;
  }
</style>
