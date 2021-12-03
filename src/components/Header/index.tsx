import React from 'react'
import styled from 'styled-components'
import Controls from '../Controls'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  min-width: 100%;
`

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Controls />
    </Wrapper>
  )
}

export default Header
