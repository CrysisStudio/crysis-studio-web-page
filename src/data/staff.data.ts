import { AFFILIATES } from './affiliates.data'
export const ROLES = {
  DIRECTOR: 'Directores',
  ADMINISTRATOR: 'Administradores',
  MODERATION: 'Moderadores',
  DEVELOPER: 'Programadores',
  DESIGNER: 'Diseñadores',
  CONSTRUCTOR: 'Constructores',
  COMPOSITOR: 'Compositores',
  HELPER: 'Ayudantes',
  MARKETING: 'Marketing',
  STORYTELLER: 'Storytellers',
  MANAGMENT: 'Gestión'
}

export const STAFF = [
  {
    name: 'Leavy',
    img: '/staff/leavy.webp',
    role: [
      ROLES.DESIGNER,
      ROLES.DIRECTOR,
      ROLES.DESIGNER,
      ROLES.DEVELOPER,
      ROLES.MODERATION,
      ROLES.STORYTELLER,
      ROLES.ADMINISTRATOR,
      ROLES.COMPOSITOR,
      ROLES.MARKETING,
      ROLES.MANAGMENT
    ],
    lead: ROLES.DIRECTOR
  },
  {
    name: 'Lukah',
    img: '/staff/lukah.webp',
    role: [ROLES.DIRECTOR],
    lead: null
  },
  {
    name: 'Cam',
    img: '/staff/cam.webp',
    role: [
      ROLES.DESIGNER,
      ROLES.CONSTRUCTOR,
      ROLES.DEVELOPER,
      ROLES.STORYTELLER,
      ROLES.MODERATION,
      ROLES.HELPER,
      ROLES.COMPOSITOR,
      ROLES.DIRECTOR
    ],
    lead: null
  },
  {
    name: 'Betun',
    img: '/staff/betun.webp',
    role: [ROLES.DIRECTOR, ROLES.DEVELOPER, ROLES.ADMINISTRATOR],
    lead: null
  },
  {
    name: 'V',
    img: '/staff/v.webp',
    role: [
      ROLES.MODERATION,
      ROLES.STORYTELLER,
      ROLES.CONSTRUCTOR,
      ROLES.DESIGNER,
      ROLES.ADMINISTRATOR
    ],
    lead: ROLES.ADMINISTRATOR
  },

  {
    name: 'Fitzxel',
    img: '/staff/fitzxel.webp',
    role: [ROLES.DEVELOPER, ROLES.ADMINISTRATOR],
    lead: ROLES.DEVELOPER
  },
  {
    name: 'Facucarrion',
    img: '/staff/facucarrion.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Marmol',
    img: '/staff/marmol.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Nioxz',
    img: '/staff/nioxz.webp',
    role: [ROLES.MODERATION, ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Cilem',
    img: '/staff/cilem.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Vicemi',
    img: '/staff/vicemi.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },

  {
    name: 'Verdo',
    img: '/staff/verdo.webp',
    role: [ROLES.MODERATION, ROLES.HELPER],
    lead: null
  },
  {
    name: 'Kozurat',
    img: '/staff/kozurat.webp',
    role: [ROLES.DESIGNER],
    lead: ROLES.DESIGNER
  },

  {
    name: 'Oruxlord',
    img: '/staff/oruxlord.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Tomás',
    img: '/staff/tomas.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Hikaru',
    img: '/staff/hikaru.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Pilar',
    img: '/staff/pilar.webp',
    role: [ROLES.DESIGNER, ROLES.HELPER],
    lead: null
  },
  {
    name: 'Ryuuzhang',
    img: '/staff/ryuuzhang.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Zerodrack',
    img: '/staff/zerodrack.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Lyferowo',
    img: '/staff/lyferowo.webp',
    role: [ROLES.COMPOSITOR],
    lead: ROLES.COMPOSITOR
  },
  {
    name: 'Kukie',
    img: '/staff/kukie.webp',
    role: [ROLES.CONSTRUCTOR, ROLES.COMPOSITOR],
    lead: null
  },
  {
    name: 'AguWZ',
    img: '/staff/aguwz.webp',
    role: [ROLES.MARKETING],
    lead: null
  },

  {
    name: 'Squiso',
    img: '/staff/squiso.webp',
    role: [ROLES.HELPER],
    lead: null
  },
  {
    name: 'Zero',
    img: '/staff/zero.webp',
    role: [ROLES.HELPER],
    lead: null
  },
  {
    name: 'Duckedd',
    img: '/staff/duck.webp',
    role: [ROLES.HELPER],
    lead: null
  },
  {
    name: 'Manaxo',
    img: '/staff/manaxo.webp',
    role: [ROLES.HELPER, ROLES.STORYTELLER],
    lead: null
  },
  {
    name: 'Sere',
    img: '/staff/sere.webp',
    role: [ROLES.STORYTELLER],
    lead: null
  },

  {
    name: 'Elena',
    img: '/staff/elena.webp',
    role: [ROLES.MARKETING],
    lead: ROLES.MARKETING
  },
  {
    name: 'Gabilavin',
    img: '/staff/gabilavin.webp',
    role: [ROLES.COMPOSITOR],
    lead: null
  },
  {
    name: 'SrSanty',
    img: '/staff/santy.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Skiddy',
    img: '/staff/skiddy.webp',
    role: [ROLES.MODERATION],
    lead: null
  },

  {
    name: 'Tobi',
    img: '/staff/tobi.webp',
    role: [ROLES.CONSTRUCTOR, ROLES.HELPER],
    lead: null
  },
  {
    name: ' Wooden',
    img: '/staff/wooden.webp',
    role: [ROLES.STORYTELLER],
    lead: null
  },
  {
    name: 'Javi',
    img: '/staff/javi.webp',
    role: [ROLES.DEVELOPER, ROLES.DESIGNER],
    lead: null
  },

  {
    name: 'Maker',
    img: '/staff/maker.webp',
    role: [ROLES.HELPER, ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Rain',
    img: '/staff/rain.webp',
    role: [ROLES.CONSTRUCTOR, ROLES.COMPOSITOR],
    lead: null
  },
  {
    name: 'anchy',
    img: '/staff/anchy.webp',
    role: [ROLES.MANAGMENT],
    lead: null
  },
  {
    name: 'histerr',
    img: '/staff/histerr.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'dypok',
    img: '/staff/dypok.webp',
    role: [ROLES.DEVELOPER, ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'KATTO',
    img: '/staff/katto.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'lapeke',
    img: '/staff/lapeke.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'mishoni',
    img: '/staff/mishoni.webp',
    role: [ROLES.MANAGMENT],
    lead: null
  },
  {
    name: 'rey',
    img: '/staff/rey.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'wachu',
    img: '/staff/wachu.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'morpheus',
    img: '/staff/morpheus.webp',
    role: [ROLES.STORYTELLER],
    lead: null
  }
]
