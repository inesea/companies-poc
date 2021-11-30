import React from 'react'
import './App.css'
import Companies from './components/Companies'
import Controls from './components/Controls'
import Header from './components/Header'
import PageLayout from './components/PageLayout'
import { StateProvider } from './store'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <StateProvider>
        <PageLayout>
          <Header>
            Companies
            <Controls />
          </Header>
          <Companies />
        </PageLayout>
      </StateProvider>
    </div>
  )
}

export default App
