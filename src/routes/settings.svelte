<script>
  import BackIcon from "../lib/icons/BackIcon.svelte";
</script>

<div class="settings">
  <div class="title">
    <a class="icon" href="/">
      <BackIcon />
    </a>
    <h2>User Settings</h2>
  </div>
</div>

<style lang="postcss">
  h2 {
    font-weight: 600;
  }

  .settings {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
  }

  .icon {
    text-decoration: none;
    color: white;
  }

  .icon :global(svg) {
    margin-right: 0.75rem;
    font-size: 32px;
    display: grid;
    place-items: center;
  }
</style>
