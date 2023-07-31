<script lang="ts">
  type Variant = 'all' | 'social' | 'collab'
  type Size = 'sm' | 'md' | 'lg'

  export let variant: Variant = 'all'
  export let size: Size = 'md'

  const icons = {
    social: [
      {
        path: '/icons/instagram.svg',
        href: 'https://www.instagram.com/crysisstudio'
      },
      {
        path: '/icons/tiktok.svg',
        href: 'https://www.tiktok.com/@crysis_studio?lang=es'
      },
      {
        path: '/icons/mail.svg',
        href: 'mailto:crysiscontacto@gmail.com'
      },
      {
        path: '/icons/twitter.svg',
        href: 'https://twitter.com/CrysisStudio'
      },
      {
        path: '/icons/soundcloud.svg',
        href: 'https://soundcloud.com/crysis-studio'
      },
      {
        path: '/icons/youtube.svg',
        href: 'https://www.youtube.com/channel/UCdqhh7G46sWf7RiNF0xs8Mg'
      }
    ],
    collab: [
      {
        path: '/icons/patreon.svg',
        href: 'https://www.patreon.com/CrysisStudio'
      },
      {
        path: '/icons/coffe.svg',
        href: 'https://ko-fi.com/crysisstudio#paypalModal'
      }
    ]
  }

  const socialMedia = {
    all: icons.social.concat(icons.collab),
    social: icons.social,
    collab: icons.collab
  }

  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  }
</script>

<ul class="flex gap-6 w-full max-w-[500px] animate-fade-up">
  {#each socialMedia[variant] as item}
    <li>
      <a href={item.href} target="_blank">
        <img
          src={item.path}
          alt={item.href}
          class={`aspect-square ${sizes[size]} transition-transform hover:scale-110 hover:rotate-6`}
        />
      </a>
    </li>
  {/each}
</ul>
