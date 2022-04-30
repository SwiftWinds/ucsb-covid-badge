<script lang="ts">
  import InputBtn from "./base/InputBtn.svelte";
  import AddPhotoIcon from "../../../icons/AddPhotoIcon.svelte";

  export let name;
</script>

<InputBtn
  accept="image/*"
  {name}
  on:change
  type="file"
  variant="high-line-height"
>
  <span>
    <AddPhotoIcon />
  </span>
  Browse
</InputBtn>

<style lang="postcss">
  span {
    display: grid;
    place-items: center;
    height: 36px;
    font-size: 1.3rem;
    float: left;
    margin-right: 15px;
  }
</style>
