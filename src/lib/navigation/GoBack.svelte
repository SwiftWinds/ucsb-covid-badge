<script>
  import BackIcon from "../icons/BackIcon.svelte";
</script>

<div class="title">
  <a class="icon" href="/">
    <BackIcon />
  </a>
  <h2>User Settings</h2>
</div>

<style lang="postcss">
  h2 {
    font-weight: 600;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
  }

  .icon {
    text-decoration: none;
    color: var(--text);
  }

  .icon :global(svg) {
    margin-right: 0.75rem;
    font-size: 32px;
    display: grid;
    place-items: center;
  }
</style>
