<script lang="ts">
  export let id;
  export let value;

  let slotObj;
</script>

<div class="root">
  <div class="form-group">
    <input
      bind:value
      {id}
      name={id}
      placeholder={slotObj?.textContent}
      required
      type="text"
    />
    <label bind:this={slotObj} for={id}>
      <slot />
    </label>
  </div>
</div>

<style lang="postcss">
  .form-group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 350px;
  }

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--underscore);
    outline: 0;
    font-size: 1.3rem;
    color: var(--text);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  input::placeholder {
    color: transparent;
  }

  input:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--label-unselected);
  }

  input:focus {
    padding-bottom: 6px;
    font-weight: bold;
    border-bottom-width: 3px;
    border-image: linear-gradient(to right, var(--grad-start), var(--grad-end)) 1;
  }

  input:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--label-selected);
    font-weight: bold;
  }

  /* reset input */
  input:required,
  input:invalid {
    box-shadow: none;
  }

  /* demo */
  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
</style>
