<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import Form from "../lib/Form.svelte";
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
  <Form on:submit={toggleShowBadge} />
  <SettingsBtn />
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}
