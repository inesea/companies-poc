import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1 0 auto;
  position: relative;
`

export const ContainerList = styled.div`
  overflow: scroll;
  position: absolute;
  width: 100%;
  height: 100%;

  /* ::-webkit-scrollbar {
    display: none;
  } */
`

export default ({ children }: { children: ReactNode }): JSX.Element => (
  <Wrapper>
    <ContainerList>{children}</ContainerList>
  </Wrapper>
)
