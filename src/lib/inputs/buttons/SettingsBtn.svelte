<script lang="ts">
  import SettingsIcon from "../../icons/SettingsIcon.svelte";
</script>

<div class="wrapper">
  <a class="btn">
    <div class="inner">
      <span class="icon">
        <SettingsIcon />
      </span>
      <span class="label">
        Settings
      </span>
    </div>
  </a>
</div>

<style lang="postcss">
  .label {
    margin-left: 5px;
  }

  .icon {
    position: absolute;
    top: -1px;
    left: 16px;
  }

  .wrapper, .inner {
    display: grid;
    place-items: center;
  }

  .btn {
    width: 344px;
    color: var(--text);
    display: grid;
    place-items: center;
    height: 86px;
    font-size: 1.8rem;
    float: left;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  .btn {
    position: relative;
    border: 4px solid transparent;
    border-radius: 6px;
    background: var(--bg);
    background-clip: padding-box;
    padding: 10px;
    /* just to show box-shadow still works fine */
  }

  .btn::after {
    position: absolute;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    background: linear-gradient(to right, var(--grad-start), var(--grad-end));
    content: "";
    z-index: -1;
    border-radius: 2px;
    box-shadow: var(--btn-box-shadow);
  }

  .btn:hover::after {
    box-shadow: var(--btn-hover-box-shadow);
    background: var(--btn-hover);
  }

  .inner {
    width: 110%;
    height: 150%;
    transform-style: preserve-3d;
  }

  .inner:before {
    content: "";
    position: absolute;
    background: var(--btn-hover);
    top: 0;
    left: 0;
    right: 0;
    bottom: 100%;
    transform: translateZ(-1px);
    -webkit-transition: bottom 0.117s ease-in;
  }

  .inner:hover {
    color: var(--grad-btn-text);
  }

  .inner:hover:before {
    bottom: 0;
  }

  .icon :global(svg) {
    font-size: 40px;
    line-height: 1em;
  }

  .icon {
    display: grid;
    place-items: center;
    height: 36px;
    font-size: 1.8rem;
    float: left;
    margin: 24px 3px 26px 22px;
    font-weight: bold;
  }
</style>
