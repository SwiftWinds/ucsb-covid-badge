<script lang="ts">
  export let id;
  export let value;

  let slotObj;
</script>

<style>
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
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: black;
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
        color: #9b9b9b;
    }

    input:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-bottom-width: 3px;
        border-image: linear-gradient(to right, #7928CA, #FF0080) 1;
    }

    input:focus ~ label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #7928CA;
        font-weight: 700;
    }

    /* reset input */
    input:required, input:invalid {
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

<div class="root">
  <div class="form-group">
    <input bind:value id={id} name={id} placeholder={slotObj?.textContent} required type="text" />
    <label bind:this={slotObj} for={id}>
      <slot />
    </label>
  </div>
</div>
