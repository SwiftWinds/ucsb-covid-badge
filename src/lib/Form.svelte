<script>
  import { name, permNum, profilePic, pronouns } from "../stores";

  const pronounsChoices = ["He/him/his", "She/her/hers", "They/them/theirs"];

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

<form on:submit|preventDefault>
  <label>Full name:
    <input bind:value={$name} name="name" required type="text" />
  </label>
  <label>Perm #:
    <input bind:value={$permNum} name="permNum" required type="text" />
  </label>
  <label>Pronouns:
    <select bind:value={$pronouns} id="pronouns" required>
      <option disabled hidden selected value> -- select an option --</option>
      {#each pronounsChoices as pronoun}
        <option value={pronoun}>{pronoun}</option>
      {/each}
    </select>
  </label>
  <label>
    Profile picture:
    <input accept="image/*" name="profilePic" on:change={handleImgSelect} type="file">
  </label>
  <input type="submit" value="Show badge" />
</form>
