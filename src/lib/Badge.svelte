<script lang="ts">
  import closeIcon from "$lib/assets/close.svg";
  import { name, permNum, profilePic, pronouns } from "../stores";
  import { createEventDispatcher } from "svelte";

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

<style>
    .badge {
        height: 100vh;
        background-color: limegreen;
        --primary-color: #003660;
        --secondary-color: #FEBC11;
    }

    div, h2, h3 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: bold;
        text-align: center;
        color: white;
    }

    header > div {
        padding-top: 0.1rem;
        font-size: 1.225rem;
    }

    header > h2 {
        font-size: 2.75rem;
        margin-top: -0.5rem;
        margin-bottom: 0.1rem;
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
        border: 1px solid #2fa4e7;
        border-bottom-color: #178acc;
        border-radius: 3px;
        background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
    }

    button:hover {
        border-color: #1684c2;
    }

    .close-icon {
        height: 2vh;
        filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(102deg) brightness(107%) contrast(102%); /* make the icon white */
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

    .profile-picture {
        padding-top: 0.1rem;
        height: 22.5vh;
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

<div class="badge">
  <header>
    <div>UCSB COVID-19 Clearance Status</div>
    <h2>Cleared to be On-Site</h2>
    <button on:click={handleClose}><img alt="Close pop-up" class="close-icon" src={closeIcon} /></button>
  </header>
  <h2 class="enrollment-type">STUDENT</h2>
  <div class="date">{timeString}</div>
  <img alt="COVID badge profile" class="profile-picture" src={$profilePic} />
  <h3>{firstName} - {$pronouns} {lastName}</h3>
  <div class="perm-number">#{$permNum?.substring(0, 6)}</div>
  <div>Next Survey Due: {nextSurveyString}</div>
</div>
