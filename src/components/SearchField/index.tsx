import CloseIcon from '@mui/icons-material/Close'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import React, { ChangeEvent } from 'react'

const Controls = ({
  value,
  placeholder,
  onChange,
  onDismiss,
}: {
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDismiss: () => void
}): JSX.Element => (
  <>
    <FormControl size="small" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search-field">
        {placeholder}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-search-field"
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <IconButton
                tabIndex={-1}
                aria-label="Clear content"
                onClick={onDismiss}
                onMouseDown={onDismiss}
                edge="end"
              >
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
        label={placeholder}
      />
    </FormControl>
  </>
)

export default Controls
