<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import Form from "../lib/Form.svelte";
  import dayjs from "dayjs";

  let showBadge = false;
  let lastOpened = dayjs();

  const toggleShowBadge = () => {
    lastOpened = dayjs();
    console.log("lastOpened", lastOpened);
    showBadge = !showBadge;
  };
</script>
{#if !showBadge}
  <Form on:submit={toggleShowBadge} />
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}
