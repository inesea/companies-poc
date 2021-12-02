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

const Wrapper = styled.span`
  font-size: ${({ size }: { size: string }) => getSize(size)};
  color: #202020;
  line-height: 1.5;
`

type Size = 'small' | 'medium' | 'large'

export default ({
  children,
  size = 'medium',
}: {
  children: ReactNode
  size?: Size
}): JSX.Element => {
  return <Wrapper {...{ size }}>{children}</Wrapper>
}
