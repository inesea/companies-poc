import React from 'react'
import styled from 'styled-components'
import Controls from '../Controls'
import Flexbox from '../Flexbox'
import Typography from '../Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  min-height: 100px;
  min-width: 100%;
  padding-top: 12px;
`

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Flexbox justifyContent="space-between">
        <Typography size="large">Companies</Typography>
        <Typography>Dark mode toggle...</Typography>
      </Flexbox>
      <Controls />
    </Wrapper>
  )
}

export default Header
