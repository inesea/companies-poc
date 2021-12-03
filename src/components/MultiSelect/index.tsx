/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createRef, RefObject, useEffect, useState } from 'react'
import DismissButton from '../DismissButton'
import Flexbox from '../Flexbox'
import Typography from '../Typography'
import * as Styled from './styles'

// todo ia: fix any type
const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default ({
  options,
  selectOption,
  selectAll,
  clearAll,
  selectedOptions,
  placeholder,
}: {
  options: {
    key: string
    label: string
  }[]
  selectOption: (option: string, isSelected: boolean) => void
  selectAll: () => void
  clearAll: () => void
  selectedOptions: string[]
  placeholder: string
}) => {
  const ref = createRef<HTMLDivElement>()
  const [isOpen, setOpen] = useState<boolean>(false)

  useOnClickOutside(ref, () => {
    setOpen(false)
  })

  return (
    <Styled.Wrapper
      ref={ref}
      onClick={() => {
        setOpen(!isOpen)
      }}
    >
      <Flexbox gap="8px" justifyContent="space-between">
        <Typography color="darkgray">
          {selectedOptions.length > 0
            ? `${selectedOptions.length} categories selected`
            : placeholder}
        </Typography>
        {selectedOptions.length > 0 && (
          <Styled.ButtonContainer>
            <DismissButton
              onClick={(event: any) => {
                clearAll()
                event.stopPropagation()
                event.preventDefault()
              }}
            />
          </Styled.ButtonContainer>
        )}
        <Flexbox gap="4px" justifyContent="flex-end">
          {isOpen ? <Styled.UpwardIcon /> : <Styled.DownwardIcon />}
        </Flexbox>
      </Flexbox>
      {isOpen && (
        <Styled.MultiSelect>
          <Styled.ControlOption>
            <Styled.Button
              onClick={(event: any) => {
                selectAll()
                event.stopPropagation()
                event.preventDefault()
              }}
            >
              Select all
            </Styled.Button>
            <Styled.Button
              onClick={(event: any) => {
                clearAll()
                event.stopPropagation()
                event.preventDefault()
              }}
            >
              Clear
            </Styled.Button>
          </Styled.ControlOption>
          {options.map((option) => (
            <Styled.Option
              key={option.key}
              onClick={(event) => {
                selectOption(option.key, !selectedOptions.includes(option.key))
                event.stopPropagation()
                event.preventDefault()
              }}
            >
              <Styled.Checkbox
                isSelected={selectedOptions.includes(option.key)}
              />
              <Typography>{option.label}</Typography>
            </Styled.Option>
          ))}
        </Styled.MultiSelect>
      )}
    </Styled.Wrapper>
  )
}
