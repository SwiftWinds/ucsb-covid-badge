<script lang="ts">
  import { name, permNum, profilePic, pronouns } from "../stores";
  import Input from "./Input.svelte";
  import Select from "./Select.svelte";
  import FileInput from "./FileInput.svelte";

  const pronounsChoices = ["He/him/his", "She/her/hers", "They/them/theirs"];

  const handleImgSelect = e => {
    const img = e.target.files?.[0];
    if (!img) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      if (typeof reader.result === "string") { // should always be the case
        profilePic.set(reader.result);         // just to make typescript happy
      }
    };
  };
</script>

<form on:submit|preventDefault>
  <Input bind:value={$name} id="name">Full name</Input>
  <Input bind:value={$permNum} id="permNum">Perm #</Input>
  <Select bind:value={$pronouns} id="pronouns" label="Pronouns" required>
    {#each pronounsChoices as pronoun}
      <option value={pronoun}>{pronoun}</option>
    {/each}
  </Select>
  <label>
    Profile picture:
    <input accept="image/*" name="profilePic" on:change={handleImgSelect} type="file">
  </label>
  <FileInput />
  <input type="submit" value="Show badge" />
</form>
