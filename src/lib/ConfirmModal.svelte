<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import sleep from "./utils/sleep";
  import DangerBtn from "./inputs/buttons/DangerBtn.svelte";

  const dispatch = createEventDispatcher();

  let isOpened = false;
  let isClosing = false;
  let confirmBtn;

  $: console.log(confirmBtn);

  const hide = async () => {
    isClosing = true;
    await sleep(200);
  };

  const handleClose = async () => {
    await hide();
    dispatch("close");
  };

  const handleConfirm = async () => {
    await hide();
    dispatch("confirm");
  };

  onMount(async () => {
    await sleep(15);
    isOpened = true;

    // Workaround for .focus() not working in onMount.
    // See https://github.com/sveltejs/sapper/issues/619#issuecomment-568078088
    setTimeout(() => confirmBtn.focus(), 0);
  });
</script>

<div class="du-dialog snipcss-Eo2Hx" class:isClosing class:isOpened
     on:click={handleClose}>
  <div class="dlg-wrapper" on:click|stopPropagation tabindex="0">
    <div
      class="dlg-header tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
      Warning
    </div>
    <div class="dlg-content">
      Are you sure you'd like to clear the badge? This action cannot be undone
    </div>
    <div class="dlg-actions">
      <button class="dlg-action" on:click={handleClose}
              tabindex="2">
        Cancel
      </button>
      <DangerBtn bind:ref={confirmBtn}
                 on:click={handleConfirm}
                 tabindex="1"
                 variant="bold" />
    </div>
  </div>
</div>

<style lang="postcss">
  @import url("//fonts.googleapis.com/css?family=Roboto");
  @import url("https://fonts.googleapis.com/css?family=Poppins|Roboto");

  .du-dialog {
    font-family: Roboto, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    user-select: none;
    background-color: transparent;
    transition: background-color .2s linear, opacity .2s ease;
    will-change: background-color, visibility, opacity;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 999999;
  }

  .du-dialog.isOpened {
    background-color: rgba(0, 0, 0, 0.35);
    visibility: visible;
    opacity: 1;
  }

  .du-dialog .dlg-wrapper {
    position: absolute;
    min-width: 280px;
    max-width: 300px;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
    outline: none;
    border-radius: 4px;
    transform: scale(.8);
    transition: transform .18s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
  }

  @media (min-width: 600px) {
    .du-dialog .dlg-wrapper {
      max-width: 300px;
    }
  }

  .du-dialog.isOpened .dlg-wrapper {
    transform: scale(1);
  }

  .du-dialog.isClosing {
    opacity: 0;
    background-color: transparent;
  }

  .du-dialog .dlg-header {
    padding: 16px 24px 8px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.02em;
    line-height: 2rem;
  }

  .du-dialog .dlg-content {
    padding: 5px 24px 5px 24px;
    color: #757575;
    font-size: 16px;
    line-height: 1.5rem;
    letter-spacing: 0.03em;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .du-dialog .dlg-actions {
    padding: 8px;
    text-align: right;
  }

  .du-dialog .dlg-action {
    font-family: inherit;
    font-size: 14px;
    border: none;
    cursor: pointer;
    padding: 0 12px;
    min-width: 72px;
    line-height: 36px;
    letter-spacing: 0.07em;
    font-weight: bold;
    color: #3f51b5;
    text-transform: uppercase;
    background-color: transparent;
    border-radius: 4px;
    outline: none;
    transition: background-color .28s linear;
    will-change: background-color;
  }

  .du-dialog .dlg-action {
    &:hover, &:focus {
      background-color: #f5f5f5;
    }
  }

  .du-dialog .dlg-action + .dlg-action {
    margin-left: 8px;
  }
</style>
