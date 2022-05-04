<script lang="ts">
  import ProfilePic from "./ProfilePic.svelte";
  import { name, permNum, pronouns } from "../stores";
  import { createEventDispatcher } from "svelte";
  import { pronounsChoices } from "./Form.svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";

  export let time;

  let timeString;
  let nextSurveyString;
  let firstName;
  let lastName;

  const timeFormat = "M/D/YYYY h:mm A";
  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch("close");
  };

  timeString = time.format(timeFormat);
  let nextSurvey = time.hour(1).minute(0);
  if (time.hour() >= 1) {
    nextSurvey = nextSurvey.add(1, "day");
  }
  nextSurveyString = nextSurvey.format(timeFormat);

  firstName = $name.split(" ")[0];
  lastName = $name.substring(firstName.length + 1);
</script>

<div class="badge">
  <header>
    <div>UCSB COVID-19 Clearance Status</div>
    <h2>Cleared to be On-Site</h2>
    <button on:click={handleClose}>
      <CloseIcon />
    </button>
  </header>
  <h2 class="enrollment-type">STUDENT</h2>
  <div class="date">{timeString}</div>
  <ProfilePic />
  {#if $pronouns === pronounsChoices[0]}
    <!--don't show pronouns-->
    <h3>{$name}</h3>
  {:else}
    <h3>{firstName} - {$pronouns} {lastName}</h3>
  {/if}
  <div class="perm-number">#{$permNum?.substring(0, 6)}</div>
  <div>Next Survey Due: {nextSurveyString}</div>
</div>

<style lang="postcss">
  .badge {
    height: 100vh;
    background-color: limegreen;
    --primary-color: #003660;
    --secondary-color: #febc11;
    --btn-bg: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
    --btn-bot-border: #178acc;
    --btn-border-unselected: #2fa4e7;
    --btn-border-selected: #1684c2;
  }

  div,
  h2,
  h3 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: center;
    color: white;
  }

  header {
    & div {
      padding-top: 0.1rem;
      font-size: 1.225rem;
    }

    & h2 {
      font-size: 2.75rem;
      margin-top: -0.5rem;
      margin-bottom: 0.1rem;
    }
  }

  button {
    display: grid;
    place-items: center;
    margin: 0.15rem;
    width: 2.375rem;
    height: 2.625rem;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid var(--btn-border-unselected);
    border-bottom-color: var(--btn-bot-border);
    border-radius: 3px;
    background-image: var(--btn-bg);
  }

  button:hover {
    border-color: var(--btn-border-selected);
  }

  .enrollment-type {
    background-color: var(--primary-color);
    font-size: 2.35rem;
    padding: 0.325rem 0;
  }

  .date {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: 2.5rem;
    padding: 0.25rem 0;
    margin: 0.125rem 0;
  }

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .perm-number {
    font-size: 1.25rem;
    margin: 0.2rem 0;
  }
</style>
