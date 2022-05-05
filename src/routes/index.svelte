<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import Form from "../lib/Form.svelte";
  import Header from "../lib/Header.svelte";
  import SettingsBtn from "../lib/inputs/buttons/SettingsBtn.svelte";
  import dayjs from "dayjs";

  let showBadge = false;
  let lastOpened = dayjs();

  const toggleShowBadge = () => {
    lastOpened = dayjs();
    showBadge = !showBadge;
  };
</script>

{#if !showBadge}
  <Header />
  <main>
    <Form on:submit={toggleShowBadge} />
    <SettingsBtn />
  </main>
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}
