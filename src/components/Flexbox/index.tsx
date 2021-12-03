import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface FlexboxStyles {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  gap?: string
  width?: string
  height?: string
  style?: { [key: string]: string }
}

interface FlexboxProps extends FlexboxStyles {
  children: ReactNode
}

const Flexbox = styled.div.attrs(
  ({
    flexDirection,
    alignItems,
    justifyContent,
    gap,
    width,
    height,
    style,
  }: FlexboxStyles) => ({
    style: {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      gap,
      width,
      height,
      ...style,
    },
  })
)``

export default ({
  children,
  flexDirection = 'row',
  alignItems = 'center',
  justifyContent = 'flex-start',
  gap = '0',
  width = '100%',
  height = '100%',
  style = {},
}: FlexboxProps): JSX.Element => {
  return (
    <Flexbox
      {...{
        flexDirection,
        alignItems,
        justifyContent,
        gap,
        width,
        height,
        style,
      }}
    >
      {children}
    </Flexbox>
  )
}
