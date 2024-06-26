<script>
  import FilterButton from './FilterButton.svelte'

  export let STAFF
  export let ROLES

  const rolesValues = Object.values(ROLES)

  let active = ''
  let filteredStaff = STAFF
  let filteredLeader = null

  const handleClick = role => {
    active = active === role ? '' : role
    filteredStaff =
      active !== ''
        ? STAFF.filter(
            item => item.role.includes(active) && item.lead !== active
          )
        : STAFF
    filteredLeader = STAFF.find(item => item.lead === active)
  }
</script>

<div class="flex flex-col gap-3 px-4">
  <span class="flex gap-4 justify-center flex-wrap w-full max-w-[900px]">
    {#each rolesValues as role}
<!-- <FilterButton {handleClick} {role} {active} /> COMENTADO, me pidieron sacarlo :v -->
    {/each}
  </span>
</div>

{#if filteredLeader}
  <section
    class="w-full md:max-w-[800px] sm:max-w-none sm:w-full sm:flex-row max-w-xs bg-rojo flex flex-col sm:gap-3"
  >
    <img
      src={filteredLeader.img}
      alt={filteredLeader.name}
      class="sm:w-3/5 w-full"
    />
    <div class="flex flex-col flex-grow justify-center p-1 sm:p-0">
      <h2 class="text-4xl">{filteredLeader.name}</h2>
      <p>Líder de {filteredLeader.lead}</p>
    </div>
  </section>
{/if}

<section class="flex flex-wrap justify-center w-full px-4 gap-4">
  {#each filteredStaff as item}
    <div
      class="flex relative items-center justify-center lg:w-3/12 sm:w-5/12 max-w-xs w-full"
    >
      <img
        src={item.img}
        alt={item.name}
        class="w-full hover:scale-105 ease-out duration-300"
      />
    </div>
  {/each}
</section>
