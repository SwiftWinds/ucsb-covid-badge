<script context="module" lang="ts">
  export const pronounsChoices = [
    "(not shown)",
    "He/him/his",
    "She/her/hers",
    "They/them/theirs",
  ];
</script>

<script lang="ts">
  import { name, permNum, profilePic, pronouns } from "./stores";
  import Input from "./inputs/Input.svelte";
  import Select from "./inputs/Select.svelte";
  import ImgInputBtn from "./inputs/buttons/ImgInputBtn.svelte";
  import ProfilePic from "./ProfilePic.svelte";
  import ShowBadgeBtn from "./inputs/buttons/ShowBadgeBtn.svelte";

  const handleImgSelect = (e) => {
    const img = e.target.files?.[0];
    if (!img) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        // should always be the case
        profilePic.set(reader.result); // just to make typescript happy
      }
    };
  };
</script>

<form on:submit|preventDefault>
  <Input bind:value={$name} id="name">Full name</Input>
  <Input bind:value={$permNum} id="permNum">Perm #</Input>
  <Select bind:value={$pronouns} id="pronouns" label="Pronouns">
    {#each pronounsChoices as pronoun}
      <option value={pronoun}>{pronoun}</option>
    {/each}
  </Select>
  <ImgInputBtn name="profilePic" on:change={handleImgSelect} />
  <ProfilePic />
  <ShowBadgeBtn />
</form>

<style lang="postcss">
  form {
    display: grid;
    place-items: center;
  }
</style>
