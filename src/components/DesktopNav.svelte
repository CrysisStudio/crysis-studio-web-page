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
  @media (max-width: 1050px) {
    nav {
      display: none;
    }
  }
</style>
