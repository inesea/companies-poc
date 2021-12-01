import React from 'react'
import styled from 'styled-components'

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
