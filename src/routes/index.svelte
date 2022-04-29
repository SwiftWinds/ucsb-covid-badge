<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import Form from "../lib/form/Form.svelte";
  import dayjs from "dayjs";

  let showBadge = false;
  let lastOpened = dayjs();

  const toggleShowBadge = () => {
    lastOpened = dayjs();
    showBadge = !showBadge;
  };
</script>

{#if !showBadge}
  <header>
    <h1 title="UCSB COVID Badge">UCB</h1>
  </header>
  <Form on:submit={toggleShowBadge} />
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}

<style lang="postcss">
  header {
    display: grid;
    place-items: center;
  }

  h1 {
    font-weight: 800;
    font-size: 8rem;
    letter-spacing: 1rem;
    display: inline-block;
    background-image: linear-gradient(60deg, #7928ca, #ff0080);
    background-size: 100%;
    background-clip: text;
    color: transparent;
  }
</style>
