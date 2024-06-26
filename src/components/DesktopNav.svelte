<script>
  export let sections
</script>

<nav>
  <ul class="flex text-rojo">
    {#each sections as { label, href }}
      <li>
        <a
          {href}
          class="text-xl border-transparent border-2 py-[0.5rem] px-4 transition-colors duration-300 hover:text-white hover:border-white"
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  @font-face {
    font-family: 'Azonix';
    src: url('fonts/Azonix.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @media (max-width: 1050px) {
    nav {
      font-family: 'Azonix', sans-serif;
      display: none;
    }
  }
</style>
