<script lang="ts">
  import "../app.css";
  import { theme } from "../stores.ts";
</script>

<div class={$theme} id="theme-container">
  <div id="app-content">
    <slot />
  </div>
</div>
