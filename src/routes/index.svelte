<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import Form from "../lib/Form.svelte";
  import Header from "../lib/Header.svelte";
  import SettingsBtn from "../lib/inputs/buttons/SettingsBtn.svelte";
  import { badgeByDefault } from "../lib/stores";
  import dayjs from "dayjs";

  import { afterNavigate } from "$app/navigation";

  let previousPage;
  afterNavigate((navigation) => {
    previousPage = navigation?.from?.pathname;
  });

  $: showBadge = $badgeByDefault && !previousPage;
  let lastOpened = dayjs();
  $: console.log("showBadge", showBadge);

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
