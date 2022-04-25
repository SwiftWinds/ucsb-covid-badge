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

<style>
    header {
        display: grid;
        place-items: center;
    }

    h1 {
        font-weight: 800;
        font-size: 8rem;
        letter-spacing: 1rem;
        display: inline-block;
        background-image: linear-gradient(60deg, #7928CA, #FF0080);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
</style>

{#if !showBadge}
  <header>
    <h1 title="UCSB Fake Badge">UFB</h1>
  </header>
  <Form on:submit={toggleShowBadge} />
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}
