<script lang="ts">
  export let id;
  export let label;
  export let value;
</script>

<div class="wrap">
  <div class="select">
    <select bind:value {id} name={id} required>
      <option disabled hidden selected value />
      <slot />
    </select>
    <label for={id}>{label}</label>
    <span class="select-highlight" />
    <span class="select-bar" />
  </div>
</div>

<style lang="postcss">
  .wrap {
    width: 350px;
    left: 0;
    margin: 0 auto;
  }

  /* select starting styling ------------------------------*/
  .select {
    margin-top: 2rem;
    position: relative;
    width: 350px;
  }

  select {
    color: var(--text);
    position: relative;
    font-family: inherit;
    background-color: transparent;
    width: 350px;
    padding: 10px 10px 10px 0;
    font-size: 1.3rem;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid var(--underscore);
  }

  /* Remove focus */
  select:focus {
    font-weight: bold;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }

  :global(option) {
    font-weight: normal;
    background: var(--bg);
  }

  /* Use custom arrow */
  .select select {
    appearance: none;
  }

  .select:after {
    position: absolute;
    top: 18px;
    right: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--underscore);
    pointer-events: none;
  }

  .select:focus-within::after {
    border-top: 6px solid var(--grad-end);
  }

  /* LABEL ======================================= */
  label {
    color: var(--label-unselected);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
  }

  select:focus + label {
    color: var(--label-selected);
    font-weight: bold;
  }

  /* active state */
  select:valid ~ label {
    top: -16px;
    transition: 0.2s ease all;
    font-size: 1rem;
  }

  /* BOTTOM BARS ================================= */
  .select-bar {
    position: relative;
    display: block;
    width: 350px;
  }

  .select-bar:after {
    content: "";
    height: 3px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: linear-gradient(to right, var(--grad-start), var(--grad-mid));
    transition: 0.2s ease all;
  }

  .select-bar:before {
    content: "";
    height: 3px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: linear-gradient(to right, var(--grad-mid), var(--grad-end));
    transition: 0.2s ease all;
  }

  .select-bar:before {
    left: 50%;
  }

  .select-bar:after {
    right: 50%;
  }

  /* active state */
  select:focus ~ .select-bar:before,
  select:focus ~ .select-bar:after {
    width: 50%;
  }

  /* HIGHLIGHTER ================================== */
  .select-highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
