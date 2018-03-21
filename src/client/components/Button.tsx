import * as React from 'react'
import { MouseEvent, SFC } from 'react' // SFC == StatelessComponent has 'children' and other things by default

type ButtonProps = {
  onClick(e: MouseEvent<HTMLElement>): void
  color?: string
}

const Button: SFC<ButtonProps> = ({
  onClick: handleClick,
  color = '#f00',
  children
}) => (
  <button style={{ color }} onClick={handleClick}>
    {children} + {color.length}
  </button>
)

export default Button
