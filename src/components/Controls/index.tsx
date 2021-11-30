import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  /* background-color: peru; */
`

const Controls = (): JSX.Element => {
  return (
    <StyledControls>
      <div>search filter</div>
      <div>something else</div>
    </StyledControls>
  )
}

export default Controls
