<script lang="ts">
  import Icon from "@iconify/svelte/dist/OfflineIcon.svelte";
  import addPhoto from "@iconify/icons-ic/baseline-add-photo-alternate";

  export let name;
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Poppins|Roboto");

    div {
        margin: 2rem;
        display: grid;
        place-items: center;
    }

    .btn {
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        box-shadow: rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 3px 1px -2px, rgba(0, 0, 0, 0.2) 0 1px 5px 0;

        display: inline-block;
        font-size: 14px;
        line-height: 36px;
        text-transform: uppercase;
        vertical-align: middle;
        border-radius: 2px;
        padding: 0 16px;

        color: white;
        background: linear-gradient(to right, #7928CA, #FF0080);
        letter-spacing: 0.5px;
        -webkit-transition: background-color .2s ease-out;
        transition: background-color .2s ease-out;
        cursor: pointer;

        position: relative;
        overflow: hidden;
    }

    .btn:hover {
        -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
        box-shadow: rgba(0, 0, 0, 0.14) 0 3px 3px 0, rgba(0, 0, 0, 0.12) 0 1px 7px 0, rgba(0, 0, 0, 0.2) 0 3px 1px -1px;
        background: linear-gradient(to right, #934adb, #ff3399);
    }

    .icon {
        display: grid;
        place-items: center;
        height: 36px;
        font-size: 1.3rem;
        float: left;
        margin-right: 15px;
    }

    input {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
    }
</style>

<div>
  <span class="btn">
    <span class="icon">
      <Icon icon={addPhoto} />
    </span>
    Browse
    <input accept="image/*" {name} on:change type="file">
  </span>
</div>
