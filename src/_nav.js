import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Menu Principal',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestion de Documentos',
  },
  {
    component: CNavGroup,
    name: 'Procedimientos',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista de Procedimientos',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Registro de Procedimiento',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Procesos',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista de Procesos',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Registro de Proceso',
        to: '/base/accordion',
      },
  
    ],
  },
  {
    component: CNavGroup,
    name: 'Responsables',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista de Responsables',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Registro de Responsable',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Documentos',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista de Documentos',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Registro de Documento',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Mi Perfil',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cambio de Contraseña',
        to: '/base/accordion',
      },
    ],
  },
  

]

export default _nav
