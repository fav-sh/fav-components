import React from 'react'
import { ButtonProps, Button } from './common'

const SVG = () => {
  return (
    <svg fill="white" width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

const MenuButton = ({ onClick }: ButtonProps) => (
  <Button onClick={onClick}>
    <div>
      <SVG />
    </div>
  </Button>
)

export default MenuButton
