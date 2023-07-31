<script>
  export let role
  export let active = ''
  export let handleClick
</script>

<button
  class="py-2 px-4 text-white border-2 rounded-full hover:text-rojo hover:border-rojo transition-color duration-300 ease-in-out
  {active === role
    ? 'bg-red border-red hover:text-white'
    : 'bg-transparent border-white'}"
  type="button"
  on:click={() => handleClick(role)}
>
  {role}
</button>
