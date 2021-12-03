import React, { FormEvent } from 'react'
import styled from 'styled-components'
import DismissButton from '../DismissButton'

const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  height: 32px;
  width: 200px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  ::placeholder {
    color: darkgray;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }
  :focus {
    outline: none;
  }
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 6px;
`

const Controls = ({
  value,
  onChange,
  onDismiss,
}: {
  value: string
  onChange: (event: FormEvent<HTMLInputElement>) => void
  onDismiss: () => void
}): JSX.Element => (
  <Wrapper>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search for a company..."
    />
    {value && (
      <ButtonContainer>
        <DismissButton onClick={onDismiss} />
      </ButtonContainer>
    )}
  </Wrapper>
)

export default Controls
