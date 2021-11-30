import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* background-color: papayawhip; */
`

const Header = ({ children }: { children: ReactNode }): JSX.Element => {
  return <StyledHeader>{children}</StyledHeader>
}

export default Header
