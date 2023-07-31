<script>
  import DesktopNav from './DesktopNav.svelte'
  import MobileNav from './MobileNav.svelte'

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
  class="flex flex-row items-center justify-around w-full p-4 max-[1051px]:flex-row"
>
  <a href="/">
    <img
      src="/crysis-isologo.webp"
      alt="Crysis Studio Logo"
      class="md:h-[5rem] h-20 relative transition-transform hover:scale-90 z-20"
    />
  </a>

  <DesktopNav {sections} />
  <MobileNav {sections} />
</header>

<style>
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 1025px) {
    header {
      animation: fade-down 1s both;
    }
  }
</style>
