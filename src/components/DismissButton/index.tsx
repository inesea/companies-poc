import React from 'react'
import styled from 'styled-components'

// hacky button
const DismissButton = styled.div`
  width: 16px;
  height: 16px;
  background-color: gainsboro;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  font-size: 10px;
  font-family: sans-serif;
  cursor: pointer;
`

export default ({ onClick }: { onClick: (event?: any) => void }) => {
  return <DismissButton onClick={onClick}>×</DismissButton>
}
