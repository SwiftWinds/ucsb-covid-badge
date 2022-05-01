<script lang="ts">
  import { noImgFallback, profilePic } from "../stores";

  $: darken = $profilePic === noImgFallback;
</script>

<img alt="COVID badge profile" class:darken src={$profilePic} />

<style lang="postcss">
  img {
    padding-top: 0.1rem;
    max-width: 170px;
  }

  @media (prefers-color-scheme: dark) {
    .darken {
      filter: brightness(65%);
    }
  }
</style>
