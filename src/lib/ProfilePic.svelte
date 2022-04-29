<script lang="ts">
  import { profilePic } from "../stores";
</script>

<img alt="COVID badge profile" src={$profilePic} />

<style lang="postcss">
  img {
    padding-top: 0.1rem;
    height: 22.5vh;
  }
</style>
