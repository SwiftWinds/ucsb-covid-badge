<script lang="ts">
  import Icon from "@iconify/svelte/dist/OfflineIcon.svelte";
  import addPhoto from "@iconify/icons-ic/baseline-add-photo-alternate.js";
  import InputBtn from "./base/InputBtn.svelte";

  export let name;
</script>

<InputBtn
  accept="image/*"
  {name}
  on:change
  type="file"
  variant="high-line-height"
>
  <span class="icon">
    <Icon icon={addPhoto} />
  </span>
  Browse
</InputBtn>

<style lang="postcss">
  .icon {
    display: grid;
    place-items: center;
    height: 36px;
    font-size: 1.3rem;
    float: left;
    margin-right: 15px;
  }
</style>
