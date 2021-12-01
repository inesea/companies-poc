import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  margin: 0;
  height: 100vh;
  /* background-color: lavender; */
`

const PageLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default PageLayout
