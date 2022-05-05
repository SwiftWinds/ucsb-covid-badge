<label class="form-switch">
  <input type="checkbox">
  <i></i>
</label>

<style lang="postcss">
  :root {
    --form-switch-color: #5965fa;

    @media (prefers-color-scheme: dark) {
      --form-switch-bg: #39383d;
    }

    @media (prefers-color-scheme: light) {
      --form-switch-bg: #e6e6e6;
    }
  }

  .form-switch {
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .form-switch i {
    position: relative;
    display: inline-block;
    margin-right: .5rem;
    width: 46px;
    height: 26px;
    background-color: var(--form-switch-bg);
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
  }

  .form-switch i::before {
    content: "";
    position: absolute;
    left: 0;
    width: 42px;
    height: 22px;
    background-color: var(--form-switch-bg);
    border-radius: 11px;
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear;
  }

  .form-switch i::after {
    content: "";
    position: absolute;
    left: 0;
    width: 22px;
    height: 22px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
  }

  .form-switch:active i::after {
    width: 28px;
    transform: translate3d(2px, 2px, 0);
  }

  .form-switch:active input:checked + i::after {
    transform: translate3d(16px, 2px, 0);
  }

  .form-switch input {
    display: none;
  }

  .form-switch input:checked + i {
    background-color: var(--form-switch-color);
  }

  .form-switch input:checked + i::before {
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
  }

  .form-switch input:checked + i::after {
    transform: translate3d(22px, 2px, 0);
  }
</style>
