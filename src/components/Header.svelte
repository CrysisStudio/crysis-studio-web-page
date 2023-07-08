<script>
  import DesktopNav from './DesktopNav.svelte'
  import MobileNav from './MobileNav.svelte'

  let windowSize = window.innerWidth

  window.addEventListener('resize', () => (windowSize = window.innerWidth))

  const sections = [
    {
      label: 'INICIO',
      href: '/'
    },
    {
      label: 'EVENTOS',
      href: '/eventos'
    },
    {
      label: 'STAFF',
      href: '/staff'
    },
    {
      label: 'AFILIADOS',
      href: '/afiliados'
    },
    {
      label: 'CONTACTO',
      href: '/contacto'
    }
  ]
</script>

<header
  class="flex flex-col gap-8 items-center justify-between w-full p-4 max-[1024px]:flex-row"
>
  <img
    src="/crysis-isologo.webp"
    alt="Crysis Studio Logo"
    class="md:h-[6.5rem] h-20 transition-transform hover:scale-90"
  />

  {#if windowSize > 1024}
    <DesktopNav {sections} />
  {:else}
    <MobileNav {sections} />
  {/if}
</header>
