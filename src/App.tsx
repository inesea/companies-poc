import React from 'react'
import styled from 'styled-components'
import Companies from './components/Companies'
import Header from './components/Header'
import PageLayout from './components/PageLayout'
import { StateProvider } from './store'

const StyledApp = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

const App = (): JSX.Element => {
  return (
    <StyledApp>
      <StateProvider>
        <PageLayout>
          <Header />
          <Companies />
        </PageLayout>
      </StateProvider>
    </StyledApp>
  )
}

export default App
