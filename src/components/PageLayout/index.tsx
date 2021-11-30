import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  padding: 12px 24px;
  /* background-color: peachpuff; */
`

const PageLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default PageLayout
