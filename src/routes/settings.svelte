<script>
  import Header from "../lib/Header.svelte";
  import DarkModeIcon from "../lib/icons/DarkModeIcon.svelte";
  import GoBack from "../lib/navigation/GoBack.svelte";
  import Toggle from "../lib/inputs/Toggle.svelte";
</script>

<Header />
<main class="settings">
  <GoBack />
  <div class="toggle">
    <div class="left">
      <div class="icon-container">
        <DarkModeIcon />
      </div>
      <div class="label">
        Dark Mode
      </div>
    </div>
    <div class="right">
      <div>
        Off
      </div>
      <Toggle />
    </div>
  </div>
</main>

<style lang="postcss">
  :root {
    @media (prefers-color-scheme: dark) {
      --dark-mode-icon-color: invert(66%) sepia(61%) saturate(201%) hue-rotate(193deg) brightness(205%) contrast(98%);
      --dark-mode-icon-bg-color: #3a3e84;
    }

    @media (prefers-color-scheme: light) {
      --dark-mode-icon-color: invert(27%) sepia(100%) saturate(5879%) hue-rotate(250deg) brightness(97%) contrast(102%);
      --dark-mode-icon-bg-color: #ecebff;
    }
  }

  .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0.5rem;
    width: 350px;
  }

  .left, .right {
    display: flex;
    align-items: center;

    & :first-child {
      margin-right: 0.75rem;
    }
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

  .icon-container :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
    filter: var(--dark-mode-icon-color);
  }

  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-mode-icon-bg-color);
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  .icon-container:before {
    content: "";
    float: left;
    width: auto;
    padding-bottom: 100%;
  }
</style>
