<script lang="ts">
  import Icon, { addCollection } from "@iconify/svelte/dist/OfflineIcon.svelte";

  export let prefix;
  export let name;
  export let body;
  export let label;

  export let width = 24;
  export let height = 24;
  export let color = "inherit";
  export let ariaHidden = false;

  /* some libraries add an id which can result in duplicate ids and that can impact
  accessibility, so you can override with a random id if you face this issue */
  const id = Date.now().toString(16) + (Math.random() * 0x1000000).toString(16);

  addCollection({
    prefix,
    icons: {
      [name]: {
        body // https://api.iconify.design/[prefix].json?icons=[name]
      }
    },
    width,
    height
  });
</script>

<Icon aria-label={label} {ariaHidden} {color} icon="{prefix}:{name}" {id} />
