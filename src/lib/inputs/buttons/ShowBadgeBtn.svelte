<script lang="ts">
  import InputBtn from "./base/InputBtn.svelte";
  import BadgeIcon from "../../icons/BadgeIcon.svelte";
</script>

<InputBtn type="submit" variant="wide">
  <span class="icon">
    <BadgeIcon />
  </span>
  <span class="text">
    Show Badge
  </span>
</InputBtn>

<style lang="postcss">
  span :global(svg) {
    font-size: 40px;
    line-height: 1em;
  }

  span {
    display: grid;
    place-items: center;
    height: 36px;
    font-size: 1.8rem;
    float: left;
    margin: 24px 3px 26px 22px;
    font-weight: bold;
  }

  .text {
    margin-top: 26px;
    margin-bottom: 24px;
  }
</style>
