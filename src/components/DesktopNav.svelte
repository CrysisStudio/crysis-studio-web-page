<script>
  export let sections
</script>

<nav>
  <ul class="flex gap-10 text-red">
    {#each sections as { label, href }}
      <li>
        <a
          {href}
          class="text-2xl border-2 border-transparent py-[0.5rem] px-6 transition-colors duration-300 hover:text-white hover:border-white"
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
