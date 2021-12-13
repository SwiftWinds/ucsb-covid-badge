<script context="module" lang="ts">
  import "../app.css";
  import { initFirebase } from "sveltefirets";
  import { firebaseConfig } from "$lib/firebaseConfig";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async () => {
    initFirebase(firebaseConfig);
    return {};
  };
</script>

<slot />
