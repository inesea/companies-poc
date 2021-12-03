import React, { ReactNode } from 'react'
import styled from 'styled-components'

const getSize = (size: string) => {
  switch (size) {
    case 'small':
      return '12px'
    case 'medium':
      return '14px'
    case 'large':
      return '16px'
    default:
      return '14px'
  }
}

const Wrapper = styled.span.attrs(
  ({ size, color }: { size: string; color: string }) => ({
    style: {
      fontSize: getSize(size),
      color,
    },
  })
)`
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

type Size = 'small' | 'medium' | 'large'

export default ({
  children,
  size = 'medium',
  color = '#202020',
}: {
  children: ReactNode
  size?: Size
  color?: string
}): JSX.Element => {
  return <Wrapper {...{ size, color }}>{children}</Wrapper>
}
