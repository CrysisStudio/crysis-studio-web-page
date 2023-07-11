export const ROLES = {
  DIRECTOR: 'Directores',
  MODERATION: 'Moderadores',
  HELPER: 'Ayudantes',
  CONSTRUCTOR: 'Constructores',
  COMPOSITOR: 'Compositores',
  DESIGNER: 'Diseñadores',
  DEVELOPER: 'Programadores',
  SCRIPTWRITER: 'Guionistas',
  VOICEACTOR: 'Actores de voz'
}

export const STAFF = [
  {
    name: 'Betun',
    img: '/staff/betun.webp',
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
      ROLES.VOICEACTOR
    ],
    lead: ROLES.DESIGNER
  },
  {
    name: 'Cilem',
    img: '/staff/cilem.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Dashi',
    img: '/staff/dashi.webp',
    role: [ROLES.DESIGNER, ROLES.MODERATION],
    lead: null
  },
  {
    name: 'Eyelissed',
    img: '/staff/eyelissed.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Facucarrion',
    img: '/staff/facucarrion.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Fitzxel',
    img: '/staff/fitzxel.webp',
    role: [ROLES.DEVELOPER],
    lead: ROLES.DEVELOPER
  },
  {
    name: 'Kozurat',
    img: '/staff/kozurat.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Kukie',
    img: '/staff/kukie.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Leavy',
    img: '/staff/leavy.webp',
    role: [ROLES.DESIGNER, ROLES.DIRECTOR, ROLES.DESIGNER, ROLES.SCRIPTWRITER],
    lead: ROLES.DIRECTOR
  },
  {
    name: 'Lukah',
    img: '/staff/lukah.webp',
    role: [ROLES.DIRECTOR],
    lead: null
  },
  {
    name: 'Lyferowo',
    img: '/staff/lyferowo.webp',
    role: [ROLES.COMPOSITOR],
    lead: null
  },
  {
    name: 'Marmol',
    img: '/staff/marmol.webp',
    role: [ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Maxi',
    img: '/staff/maxi.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Nioxz',
    img: '/staff/nioxz.webp',
    role: [ROLES.MODERATION, ROLES.DEVELOPER],
    lead: null
  },
  {
    name: 'Oruxlord',
    img: '/staff/oruxlord.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Poisonella',
    img: '/staff/poisonella.webp',
    role: [],
    lead: null
  },
  {
    name: 'Ryuuzhang',
    img: '/staff/ryuuzhang.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  },
  {
    name: 'Sashe',
    img: '/staff/sashe.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'Squiso',
    img: '/staff/squiso.webp',
    role: [ROLES.HELPER],
    lead: null
  },
  {
    name: 'TheCoffeeCrazy',
    img: '/staff/thecoffeecrazy.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: ROLES.CONSTRUCTOR
  },
  {
    name: 'Tomás',
    img: '/staff/tomas.webp',
    role: [ROLES.DESIGNER],
    lead: null
  },
  {
    name: 'V',
    img: '/staff/v.webp',
    role: [
      ROLES.MODERATION,
      ROLES.SCRIPTWRITER,
      ROLES.CONSTRUCTOR,
      ROLES.DESIGNER
    ],
    lead: ROLES.MODERATION
  },
  {
    name: 'Verdo',
    img: '/staff/verdo.webp',
    role: [ROLES.MODERATION, ROLES.HELPER],
    lead: null
  },
  {
    name: 'Zero',
    img: '/staff/zero.webp',
    role: [ROLES.HELPER],
    lead: null
  },
  {
    name: 'Zerodrack',
    img: '/staff/zerodrack.webp',
    role: [ROLES.CONSTRUCTOR],
    lead: null
  }
]
