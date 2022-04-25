<script lang="ts">
  import { profilePic } from "../../stores";
</script>

<style>
    img {
        padding-top: 0.1rem;
        height: 22.5vh;
    }
</style>

<img alt="COVID badge profile" src={$profilePic} />
