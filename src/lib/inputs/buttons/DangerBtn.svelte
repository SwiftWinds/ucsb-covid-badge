<button
  class="dark:focus:ring-red-900"
  type="button">
  Clear
</button>


<style>
  :global(#theme-container.dark) {
    --danger-btn-bg: #dc2626;
    --danger-btn-bg-hover: #b91c1c;
    --danger-btn-ring: #7f1d1d;
  }

  :global(#theme-container.light) {
    --danger-btn-bg: #ef4444;
    --danger-btn-bg-hover: #dc2626;
    --danger-btn-ring: #fca5a5;
  }

  button {
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--danger-btn-bg);
    padding: 0.625rem 1.25rem;

    font-size: 0.875rem;
    line-height: 1.25rem;

    font-weight: 500;
    color: white;
  }

  button:hover {
    background-color: var(--danger-btn-bg-hover);
  }

  button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: 0 0 0 4px var(--danger-btn-ring);
  }

</style>
