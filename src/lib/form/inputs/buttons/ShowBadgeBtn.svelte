<script lang="ts">
  import InputBtn from "./base/InputBtn.svelte";
</script>

<InputBtn type="submit" variant="wide">
  <span>Show Badge</span>
</InputBtn>

<style lang="postcss">
  span {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
    font-weight: bold;
    width: 100%;
    font-size: 1.8rem;
    float: left;
  }
</style>
