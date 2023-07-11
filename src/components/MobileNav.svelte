<script>
  export let sections

  let isOpen = false
  let status = 'CLOSED'

  const STATUS = {
    OPEN: {
      display: 'flex',
      icon: 'close-menu',
      class: 'left-0'
    },
    CLOSED: {
      display: 'hidden',
      icon: 'open-menu',
      class: 'left-full'
    }
  }

  const toggle = () => {
    isOpen = !isOpen
    status = isOpen ? 'OPEN' : 'CLOSED'
  }
</script>

<div>
  <button on:click={toggle} class="z-20 relative">
    <img
      src="/icons/{STATUS[status].icon}.svg"
      alt={STATUS[status].icon.replace('-', ' ')}
      class="h-14"
    />
  </button>

  <nav
    class="flex flex-col justify-center items-center fixed top-0 right h-screen w-screen z-10
    {STATUS[status]
      .class} transition-position duration-300 bg-black bg-opacity-90"
  >
    <ul class="flex flex-col items-center gap-8">
      {#each sections as { label, href }}
        <li>
          <a
            {href}
            class="text-2xl text-white border-2 border-transparent py-[0.5rem] px-6 transition-colors duration-300 focus:border-white"
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  @media (min-width: 1025px) {
    div {
      display: none;
    }
  }
</style>
