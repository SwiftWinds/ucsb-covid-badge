<script lang="ts">
  export let variant;
</script>

<div>
  <span class={variant}>
    <slot />
    <input {...$$restProps} on:change />
  </span>
</div>

<style lang="postcss">
  div {
    margin: 2rem;
    display: grid;
    place-items: center;
  }

  .wide {
    width: 350px;
  }

  .high-line-height {
    line-height: 36px;
  }

  span {
    box-shadow: var(--btn-box-shadow);

    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    vertical-align: middle;
    border-radius: 2px;
    padding: 0 16px;

    color: var(--grad-btn-text);
    background: linear-gradient(to right, var(--grad-start), var(--grad-end));
    letter-spacing: 0.5px;
    transition: background-color 0.2s ease-out;
    cursor: pointer;

    position: relative;
    overflow: hidden;
  }

  span:hover {
    box-shadow: var(--btn-hover-box-shadow);
    background: var(--btn-hover);
  }

  input {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;

    width: 100%;
    height: 100%;
  }
</style>
