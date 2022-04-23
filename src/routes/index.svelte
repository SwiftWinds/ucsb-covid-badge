<script lang="ts">
  import Badge from "../lib/Badge.svelte";
  import { name, permNum, profilePic, pronouns } from "../stores";
  import dayjs from "dayjs";

  const pronounsChoices = ["He/him/his", "She/her/hers", "They/them/theirs"];

  let showBadge = false;
  let lastOpened = dayjs();

  const toggleShowBadge = () => {
    lastOpened = dayjs();
    console.log("lastOpened", lastOpened);
    showBadge = !showBadge;
  };

  const handleImgSelect = e => {
    const img = e.target.files?.[0];
    if (!img) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      profilePic.set(reader.result);
    };
  };
</script>
{#if !showBadge}
  <form on:submit|preventDefault={toggleShowBadge}>
    <label>Full name:
      <input required type="text" name="name" bind:value={$name} />
    </label>
    <label>Perm #:
      <input required type="text" name="permNum" bind:value={$permNum} />
    </label>
    <label>Pronouns:
      <select bind:value={$pronouns} id="pronouns" required>
        <option hidden disabled selected value> -- select an option --</option>
        {#each pronounsChoices as pronoun}
          <option value={pronoun}>{pronoun}</option>
        {/each}
      </select>
    </label>
    <label>
      Profile picture:
      <input on:change={handleImgSelect} type="file" name="profilePic" accept="image/*">
    </label>
    <input type="submit" value="Show badge" />
  </form>
{:else}
  <Badge time={lastOpened} on:close={toggleShowBadge} />
{/if}
