import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface FlexboxStyles {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  flexWrap?: string
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
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    width,
    height,
    style,
  }: FlexboxStyles) => ({
    style: {
      display: 'flex',
      justifyContent,
      flexDirection,
      alignItems,
      flexWrap,
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
  justifyContent = 'flex-start',
  alignItems = 'center',
  flexWrap = 'nowrap',
  gap = '0',
  width = '100%',
  height = '100%',
  style = {},
}: FlexboxProps): JSX.Element => {
  return (
    <Flexbox
      {...{
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
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
