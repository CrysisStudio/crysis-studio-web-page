import { AFFILIATES } from './affiliates.data'
export const ROLES = {
  DIRECTORES: 'Directores',
  DIRECTOR: 'Directores',

}
// cambiado para solamente directores auxiliares, FALTAN FOTOS

export const STAFF = [
  {
    name: 'Leavy',
    img: '/staff/leavy.webp',
  },
  {
    name: 'Drift',
    img: '/staff/drift.png',
    role: [
      ROLES.DIRECTORES
    ],
  },
  {
    name: 'V',
    img: '/staff/v.jpg',
    role: [
      ROLES.DIRECTORES],
  },
    {
    name: 'anchy',
    img: '/staff/anchy.webp',
    role: [
      ROLES.DIRECTORES
    ],
  },
  {
    name: 'Betun',
    img: '/staff/a.jpg',
    role: [
      ROLES.DIRECTORES
    ],
  },
  {
    name: 'Fitzxel',
    img: '/staff/a.jpg',
    role: [
      ROLES.DIRECTORES
    ],
  },
  {
    name: 'lapeke',
    img: '/staff/peke.webp',
    role: [
      ROLES.DIRECTORES
    ],
  }
]
