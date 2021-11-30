import React from 'react'
import './App.css'
import Companies from './components/Companies'
import Controls from './components/Controls'
import Header from './components/Header'
import PageLayout from './components/PageLayout'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <PageLayout>
        <Header>
          Companies
          <Controls />
        </Header>
        <Companies />
      </PageLayout>
    </div>
  )
}

export default App
