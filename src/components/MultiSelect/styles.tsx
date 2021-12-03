import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;
  width: 188px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
`

export const MultiSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 1px 3px lightgray;
  border-radius: 4px;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 12px;
  min-height: 36px;
  width: 180px;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: whitesmoke;
  }
`
export const ControlOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  min-height: 36px;
  width: 180px;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
`

export const Button = styled.div`
  cursor: pointer;
  color: dodgerblue;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 11px;
`

export const DownwardIcon = styled.div`
  margin: 0 4px 0 4px;
  width: 4px;
  height: 4px;
  padding: 2px;
  border-left: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  transform: rotate(-45deg);
`

export const UpwardIcon = styled.div`
  margin: 6px 4px 0 4px;
  width: 4px;
  height: 4px;
  padding: 2px;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  transform: rotate(225deg);
`

export const Checkbox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  border: 1px solid
    ${({ isSelected }: { isSelected: boolean }) =>
      isSelected ? 'steelblue' : 'lightgray'};
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? 'steelblue' : 'white'};
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 28px;
`
