<script lang="ts">
  export let id;
  export let label;
  export let value;
</script>

<style>
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
        position: relative;
        font-family: inherit;
        background-color: transparent;
        width: 350px;
        padding: 10px 10px 10px 0;
        font-size: 18px;
        border-radius: 0;
        border: none;
        border-bottom: 2px solid #9b9b9b;
    }

    /* Remove focus */
    select:focus {
        font-weight: bold;
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
    }

    :global(option) {
        font-weight: normal;
    }

    /* Use custom arrow */
    .select select {
        appearance: none;
        -webkit-appearance: none;
    }

    .select:after {
        position: absolute;
        top: 18px;
        right: 10px;
        /* Styling the down arrow */
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #9b9b9b;
        pointer-events: none;
    }

    .select:focus-within::after {
        border-top: 6px solid #FF0080;
    }


    /* LABEL ======================================= */
    label {
        color: #9b9b9b;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 0;
        top: 10px;
        transition: 0.2s ease all;
    }

    select:focus + label {
        color: #7928CA;
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
        content: '';
        height: 3px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: linear-gradient(to right, #7928CA, #BC14A5);
        transition: 0.2s ease all;
    }

    .select-bar:before {
        content: '';
        height: 3px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: linear-gradient(to right, #BC14A5, #FF0080);
        transition: 0.2s ease all;
    }

    .select-bar:before {
        left: 50%;
    }

    .select-bar:after {
        right: 50%;
    }

    /* active state */
    select:focus ~ .select-bar:before, select:focus ~ .select-bar:after {
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

<div class="wrap">
  <div class="select">
    <select bind:value id={id} name={id} required>
      <option disabled hidden selected value></option>
      <slot />
    </select>
    <label for={id}>{label}</label>
    <span class="select-highlight"></span>
    <span class="select-bar"></span>
  </div>
</div>

