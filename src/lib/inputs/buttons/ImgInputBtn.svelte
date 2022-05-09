<script lang="ts">
  import GradBtn from "./base/GradBtn.svelte";
  import AddPhotoIcon from "../../icons/AddPhotoIcon.svelte";

  export let name;
</script>

<GradBtn
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
</GradBtn>

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
