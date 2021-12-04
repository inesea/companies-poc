import React, { useContext } from 'react'
import styled from 'styled-components'
import { State, store } from '../../store'
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
  const { state } = useContext(store) as {
    state: State
  }
  const { companies = [] } = state

  return (
    <Wrapper>
      <Flexbox justifyContent="space-between">
        <Flexbox flexDirection="column" alignItems="flex-start">
          <Typography size="large">Companies</Typography>
          <Typography
            size="small"
            color="darkgray"
          >{`Total: ${companies.length}`}</Typography>
        </Flexbox>
        {/* <Typography>Dark mode toggle...</Typography> */}
      </Flexbox>
      <Controls />
    </Wrapper>
  )
}

export default Header
